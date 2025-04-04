const express = require("express")
const router = express.Router()

const { requireRole, roles } = require("../middlewares/auth")
const {
    getAllUsers,
    createUser,
    getUser,
    deleteUser,
    changePassword,
    getUserProfileImage,
    changeProfileImage,
    addRole,
    removeRole,
    editUser,
} = require("../controllers/users")

router.get("/", requireRole(roles.ADMIN), getAllUsers)
router.post("/", createUser)
router.get("/:username", requireRole(roles.USER), getUser)
router.delete("/:username", requireRole(roles.USER), deleteUser)
router.put("/:username/password", requireRole(roles.USER), changePassword)
router.get("/:username/profileImage", getUserProfileImage)
router.put("/:username/profileImage", requireRole(roles.USER), changeProfileImage)
router.post("/:username/role", requireRole(roles.ADMIN), addRole)
router.delete("/:username/role/:role", requireRole(roles.ADMIN), removeRole)
router.patch("/:username/profile", requireRole(roles.USER), editUser)

module.exports = router
