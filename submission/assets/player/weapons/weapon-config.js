window.WEAPON_CONFIG = {
    "defaultWeapon":  "gun",
    "weaponDescriptions":  {
        "gun":                "Default front-mounted rifle. Reliable friend that every pilot should have in their arsenal.",
        "gun2":               "Double the rifles, double the fun, cheap and effective way to increase your firepower and shred through enemies faster.",
        "gun3":               "Rotary cannon with rapid fire rate, high ammo capacity and bigger bullets. Unleash a storm of lead to mow down enemies.",
        "shotgun":            "Wide pellet spread for close defense and crowd trimming when enemies close the distance.",
        "shotgun2":           "Denser burst pattern with improved shell count, built to erase clustered targets faster.",
        "shotgun3":           "Heavy shotgun that floods the lane with pellets and punishes swarm pushes.",
        "laser":              "High-velocity beam that pierces through enemies for strong single-lane control.",
        "laser2":             "Refined dual-laser system with faster cooldown and better ammo capacity for sustained piercing power.",
        "pulse":              "Compressed pulse rifle that fires slow, heavy energy rounds that pass through enemies for strong lane control.",
        "pulse2":             "Amplified pulse emitter with larger shots and higher damage - great for control over grouped threats.",
        "pulse3":             "Tinfoil Cat Launcher that fires massive piercing energy cats. Unmatched for clearing lanes and punishing clustered enemies.",
        "electric1":          "Microwave gun that shoots arcs of electricity to nearby targets. Great for hitting enemies without aiming.",
        "electric2":          "Bigger microvave for bigger electricity arcs and more targets. Still no aiming needed, just point in the general direction and let it zap.",
        "electric3":          "Powerful microwave capable of disrupting entire waves of heavy enemies (do not use your phone around it).",
        "flamethrower":       "Short-range flame cone that scorches enemies directly ahead.",
        "flamethrower2":      "High-output blue plasma flamethrower with extended range and increased damage per second.",
        "rockets":            "Wing-mounted rockets. Great for clearing heavier enemies or groups",
        "rockets2":           "Improved rockets with higher velocity and wider blast radius. Bigger, better, bolder.",
        "rockets3":           "Best rockets for maximum destruction and area control.",
        "little_boy":         "Long-range nuclear device. One well-placed shot clears an entire wave with a massive blast radius.",
        "big_papa":           "Huge blast radious, long cooldown, fire once and go sunbathing while the enemies burn.",
        "rocket_launcher":    "Wing-mounted launcher with a deep clip of small explosive rockets. Fast fire, long reload.",
        "moon_syringe":       "Moon-oil filled syringe that freezes enemies in place and leaves them vulnerable to shattering damage.",
        "corrosive_syringe":  "Upgraded syringe loaded with corrosive moon-oil. Freezes enemies and burns them with acid over time.",
        "mayo":               "Mayo sprayer that slows enemies in a wide cone and leaves a sticky mess all over the battlefield.",
        "wasabi_mayo":        "Upgraded wasabi mayo launcher with wider spray and corrosive burn that deals damage over time."
    },
    "weapons":  [
                    {
                        "id":  "gun",
                        "name":  "Rifle",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/gun.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.5,
                        "clipSize":  10,
                        "reloadSeconds":  2,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  8,
                                           "radius":  4,
                                           "color":  "#ffa040",
                                           "pierce":  false,
                                           "maxHits":  1,
                                           "drawLength":  12,
                                           "thickness":  2,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  0
                    },
                    {
                        "id":  "gun2",
                        "name":  "Dual Rifle",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/gun2.png",
                        "barrelDetection":  "top",
                        "muzzleSpacingScale":  3.2,
                        "cooldown":  0.5,
                        "clipSize":  30,
                        "reloadSeconds":  1,
                        "ammoPerShot":  2,
                        "projectile":  {
                                           "speed":  8,
                                           "radius":  3,
                                           "color":  "#ffa040",
                                           "pierce":  false,
                                           "maxHits":  1,
                                           "drawLength":  12,
                                           "thickness":  2,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  1000
                    },
                    {
                        "id":  "gun3",
                        "name":  "Minigun",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/gun3.png",
                        "barrelDetection":  "top",
                        "barrelMode":  "single-center",
                        "cooldown":  0.1667,
                        "clipSize":  50,
                        "reloadSeconds":  1,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  8,
                                           "radius":  4,
                                           "color":  "#ffa040",
                                           "pierce":  false,
                                           "maxHits":  1,
                                           "drawLength":  12,
                                           "thickness":  2,
                                           "damage":  2
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  5000
                    },
                    {
                        "id":  "laser",
                        "name":  "Laser Gun",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/laser.png",
                        "barrelDetection":  "red-top",
                        "cooldown":  0.25,
                        "clipSize":  30,
                        "reloadSeconds":  2,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  16,
                                           "radius":  2,
                                           "color":  "#ff4545",
                                           "pierce":  true,
                                           "maxHits":  999,
                                           "drawLength":  24,
                                           "thickness":  2,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  5000
                    },
                    {
                        "id":  "laser2",
                        "name":  "Dual Laser Gun",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/laser2.png",
                        "barrelDetection":  "red-top",
                        "cooldown":  0.25,
                        "clipSize":  50,
                        "reloadSeconds":  2,
                        "ammoPerShot":  2,
                        "projectile":  {
                                           "speed":  16,
                                           "radius":  2,
                                           "color":  "#ff4545",
                                           "pierce":  true,
                                           "maxHits":  999,
                                           "drawLength":  24,
                                           "thickness":  2,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  15000
                    },
                    {
                        "id":  "shotgun",
                        "name":  "Shotgun",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/shotgun.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.5,
                        "clipSize":  8,
                        "reloadSeconds":  2,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  8,
                                           "radius":  4,
                                           "color":  "#ffa040",
                                           "pierce":  false,
                                           "maxHits":  1,
                                           "drawLength":  8,
                                           "thickness":  1.5,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  5,
                                        "spreadDeg":  20
                                    },
                        "cost":  1000
                    },
                    {
                        "id":  "shotgun2",
                        "name":  "Improved Shotgun",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/shotgun2.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.5,
                        "clipSize":  15,
                        "reloadSeconds":  1.5,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  8,
                                           "radius":  3,
                                           "color":  "#ff4444",
                                           "pierce":  false,
                                           "maxHits":  1,
                                           "drawLength":  8,
                                           "thickness":  1.5,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  7,
                                        "spreadDeg":  25
                                    },
                        "cost":  5000
                    },
                    {
                        "id":  "shotgun3",
                        "name":  "Elite Shotgun",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/shotgun3.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.5,
                        "clipSize":  25,
                        "reloadSeconds":  1,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  8,
                                           "radius":  2,
                                           "color":  "#4aa3ff",
                                           "pierce":  false,
                                           "maxHits":  1,
                                           "drawLength":  8,
                                           "thickness":  1.5,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  12,
                                        "spreadDeg":  30
                                    },
                        "cost":  10000
                    },
                    {
                        "id":  "pulse",
                        "name":  "Pulse Rifle",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/pulse.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.5,
                        "clipSize":  5,
                        "reloadSeconds":  2,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  4,
                                           "radius":  6,
                                           "color":  "#62ffe6",
                                           "pierce":  true,
                                           "maxHits":  999,
                                           "drawLength":  0,
                                           "thickness":  0,
                                           "damage":  1
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  5000
                    },
                    {
                        "id":  "pulse2",
                        "name":  "Pulse Cannon",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/pulse2.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.5,
                        "clipSize":  10,
                        "reloadSeconds":  2,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  4,
                                           "radius":  12,
                                           "color":  "#7affef",
                                           "pierce":  true,
                                           "maxHits":  999,
                                           "drawLength":  0,
                                           "thickness":  0,
                                           "damage":  2
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  10000
                    },
                    {
                        "id":  "pulse3",
                        "name":  "Tinfoil Cat Gun",
                        "enabled":  true,
                        "type":  "projectile",
                        "sprite":  "assets/player/weapons/pulse3.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.5,
                        "clipSize":  20,
                        "reloadSeconds":  2,
                        "ammoPerShot":  1,
                        "projectile":  {
                                           "speed":  4,
                                           "radius":  28,
                                           "color":  "#8dc5ff",
                                           "pierce":  true,
                                           "maxHits":  999,
                                           "drawLength":  0,
                                           "thickness":  0,
                                           "damage":  3
                                       },
                        "pattern":  {
                                        "count":  1,
                                        "spreadDeg":  0
                                    },
                        "cost":  20000
                    },
                    {
                        "id":  "electric1",
                        "name":  "Home-brew Microwave Emitter",
                        "enabled":  true,
                        "type":  "electric",
                        "sprite":  "assets/player/weapons/electric1.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.1,
                        "batterySeconds":  10,
                        "reloadSeconds":  2,
                        "electric":  {
                                         "range":  350,
                                         "maxTargets":  2,
                                         "damagePerSecond":  2,
                                         "color":  "#7ee8ff",
                                         "thickness":  1.5
                                     },
                        "cost":  5000
                    },
                    {
                        "id":  "electric2",
                        "name":  "Multi-target Microwave Weapon",
                        "enabled":  true,
                        "type":  "electric",
                        "sprite":  "assets/player/weapons/electric2.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.1,
                        "batterySeconds":  20,
                        "reloadSeconds":  2,
                        "electric":  {
                                         "range":  380,
                                         "maxTargets":  3,
                                         "damagePerSecond":  2.5,
                                         "color":  "#84f1ff",
                                         "thickness":  2.5
                                     },
                        "cost":  7500
                    },
                    {
                        "id":  "electric3",
                        "name":  "Advanced Microwave Gun",
                        "enabled":  true,
                        "type":  "electric",
                        "sprite":  "assets/player/weapons/electric3.png",
                        "barrelDetection":  "top",
                        "cooldown":  0.1,
                        "batterySeconds":  40,
                        "reloadSeconds":  2,
                        "electric":  {
                                         "range":  400,
                                         "maxTargets":  4,
                                         "damagePerSecond":  3.5,
                                         "color":  "#a5e0ff",
                                         "thickness":  4
                                     },
                        "cost":  15000
                    },
                    {
                        "id":  "rockets",
                        "name":  "Rockets",
                        "enabled":  true,
                        "type":  "rocket",
                        "sprite":  "assets/player/weapons/rockets.png",
                        "barrelDetection":  "bottom",
                        "clipSize":  2,
                        "reloadSeconds":  8,
                        "ammoPerShot":  1,
                        "rocket":  {
                                       "speed":  4,
                                       "blastRadius":  120,
                                       "damage":  999
                                   },
                        "cost":  1000
                    },
                    {
                        "id":  "rockets2",
                        "name":  "Rockets 2",
                        "enabled":  true,
                        "type":  "rocket",
                        "sprite":  "assets/player/weapons/rockets2.png",
                        "barrelDetection":  "bottom",
                        "clipSize":  2,
                        "reloadSeconds":  8,
                        "ammoPerShot":  1,
                        "rocket":  {
                                       "speed":  4,
                                       "blastRadius":  160,
                                       "damage":  999
                                   },
                        "cost":  3000
                    },
                    {
                        "id":  "rockets3",
                        "name":  "Rockets 3",
                        "enabled":  true,
                        "type":  "rocket",
                        "sprite":  "assets/player/weapons/rockets3.png",
                        "barrelDetection":  "bottom",
                        "clipSize":  2,
                        "reloadSeconds":  8,
                        "ammoPerShot":  1,
                        "rocket":  {
                                       "speed":  4,
                                       "blastRadius":  200,
                                       "damage":  999
                                   },
                        "cost":  7500
                    },
                    {
                        "id":  "little_boy",
                        "name":  "Little Boy",
                        "enabled":  true,
                        "type":  "rocket",
                        "sprite":  "assets/player/weapons/little_boy.png",
                        "barrelDetection":  "bottom",
                        "clipSize":  2,
                        "reloadSeconds":  20,
                        "ammoPerShot":  1,
                        "rocket":  {
                                       "speed":  2,
                                       "blastRadius":  240,
                                       "damage":  999,
                                       "nukeExplosion":  true
                                   },
                        "cost":  15000
                    },
                    {
                        "id":  "big_papa",
                        "name":  "Big Papa",
                        "enabled":  true,
                        "type":  "rocket",
                        "sprite":  "assets/player/weapons/big_papa.png",
                        "barrelDetection":  "bottom",
                        "clipSize":  2,
                        "reloadSeconds":  20,
                        "ammoPerShot":  1,
                        "rocket":  {
                                       "speed":  2,
                                       "blastRadius":  460,
                                       "damage":  999,
                                       "nukeExplosion":  true
                                   },
                        "cost":  25000
                    },
                    {
                        "id":  "rocket_launcher",
                        "name":  "Rocket Launcher",
                        "enabled":  true,
                        "type":  "rocket",
                        "sprite":  "assets/player/weapons/rocket_launcher.png",
                        "barrelDetection":  "bottom",
                        "rocketProjectileMode":  "smallest",
                        "clipSize":  12,
                        "reloadSeconds":  15,
                        "ammoPerShot":  1,
                        "rocket":  {
                                       "speed":  4,
                                       "blastRadius":  120,
                                       "damage":  999
                                   },
                        "cost":  5000
                    },
                    {
                        "id":  "moon_syringe",
                        "name":  "Moon Oil Syringe",
                        "enabled":  true,
                        "type":  "syringe",
                        "sprite":  "assets/player/weapons/moon_syringe.png",
                        "barrelDetection":  "bottom",
                        "clipSize":  2,
                        "reloadSeconds":  10,
                        "ammoPerShot":  1,
                        "syringe":  {
                                        "speed":  4,
                                        "blastRadius":  260,
                                        "freezeDuration":  5,
                                        "freezeDps":  0,
                                        "color":  "rgba(100,200,255,0.72)"
                                    },
                        "cost":  5000
                    },
                    {
                        "id":  "corrosive_syringe",
                        "name":  "Corrosive Syringe",
                        "enabled":  true,
                        "type":  "syringe",
                        "sprite":  "assets/player/weapons/corrosive_syringe.png",
                        "barrelDetection":  "bottom",
                        "clipSize":  2,
                        "reloadSeconds":  10,
                        "ammoPerShot":  1,
                        "syringe":  {
                                        "speed":  4,
                                        "blastRadius":  260,
                                        "freezeDuration":  5,
                                        "freezeDps":  0.5,
                                        "color":  "rgba(50,210,160,0.72)"
                                    },
                        "cost":  10000
                    },
                    {
                        "id":  "flamethrower",
                        "name":  "Flamethrower",
                        "enabled":  true,
                        "type":  "flamethrower",
                        "sprite":  "assets/player/weapons/flamethrower.png",
                        "barrelDetection":  "top",
                        "batterySeconds":  8,
                        "reloadSeconds":  3,
                        "flamethrower":  {
                                             "range":  250,
                                             "coneAngleDeg":  22,
                                             "damagePerSecond":  4.5,
                                             "particleSize":  16,
                                             "color1":  "#ff6600",
                                             "color2":  "#ff9900"
                                         },
                        "cost":  5000
                    },
                    {
                        "id":  "flamethrower2",
                        "name":  "Blue Flamethrower",
                        "enabled":  true,
                        "type":  "flamethrower",
                        "sprite":  "assets/player/weapons/flamethrower2.png",
                        "barrelDetection":  "top",
                        "batterySeconds":  12,
                        "reloadSeconds":  3,
                        "flamethrower":  {
                                             "range":  320,
                                             "coneAngleDeg":  30,
                                             "damagePerSecond":  7.5,
                                             "particleSize":  20,
                                             "color1":  "#00b4ff",
                                             "color2":  "#80e0ff"
                                         },
                        "cost":  15000
                    },
                    {
                        "id":  "mayo",
                        "name":  "Mayo Sprayer",
                        "enabled":  true,
                        "type":  "mayo",
                        "sprite":  "assets/player/weapons/mayo.png",
                        "barrelDetection":  "bottom",
                        "batterySeconds":  8,
                        "reloadSeconds":  5,
                        "mayo":  {
                                     "range":  270,
                                     "coneAngleDeg":  25,
                                     "slowDuration":  4,
                                     "corrosiveDps":  0,
                                     "particleSize":  14,
                                     "color1":  "#f5f0a0",
                                     "color2":  "#d4c830"
                                 },
                        "cost":  7000
                    },
                    {
                        "id":  "wasabi_mayo",
                        "name":  "Wasabi Mayo",
                        "enabled":  true,
                        "type":  "mayo",
                        "sprite":  "assets/player/weapons/wasabi_mayo.png",
                        "barrelDetection":  "bottom",
                        "batterySeconds":  10,
                        "reloadSeconds":  5,
                        "mayo":  {
                                     "range":  300,
                                     "coneAngleDeg":  25,
                                     "slowDuration":  5,
                                     "corrosiveDps":  0.5,
                                     "particleSize":  16,
                                     "color1":  "#a8e840",
                                     "color2":  "#5dc420"
                                 },
                        "cost":  15000
                    }
                ],
    "audio":  {
                  "enabled":  true,
                  "masterVolume":  0.3,
                  "sounds":  {
                                 "gun_shot":  {
                                                  "file":  "gun_shot.mp3",
                                                  "volume":  0.59,
                                                  "minIntervalMs":  25
                                              },
                                 "shotgun":  {
                                                  "file":  "shotgun.mp3",
                                                  "volume":  0.63,
                                                  "minIntervalMs":  70
                                              },
                                 "laser_shot":  {
                                                     "file":  "laser_shot.mp3",
                                                     "volume":  0.56,
                                                     "minIntervalMs":  45
                                                 },
                                 "pulse_shot":  {
                                                     "file":  "pulse_shot.mp3",
                                                     "volume":  0.61,
                                                     "minIntervalMs":  55
                                                 },
                                 "meow":  {
                                              "file":  "meow.mp3",
                                              "volume":  0.25,
                                              "minIntervalMs":  55
                                          },
                                 "rocket_launch":  {
                                                       "file":  "rocket_launch.mp3",
                                                       "volume":  0.70,
                                                       "minIntervalMs":  90
                                                   },
                                 "syringe":  {
                                                  "file":  "syringe.mp3",
                                                  "volume":  0.63,
                                                  "minIntervalMs":  80
                                              },
                                 "squash":  {
                                                 "file":  "squash.mp3",
                                                 "volume":  0.65,
                                                 "minIntervalMs":  170
                                             },
                                 "flamethrower_start":  {
                                                           "file":  "flamethrower_start.mp3",
                                                           "volume":  0.68
                                                       },
                                 "flamethrower_continue":  {
                                                              "file":  "flamethrower_continue.mp3",
                                                              "volume":  0.56,
                                                              "loop":  true
                                                          },
                                 "electric":  {
                                                  "file":  "electric.mp3",
                                                  "volume":  0.50,
                                                  "loop":  true
                                              },
                                 "bug_splat":  {
                                                   "file":  "bug_splat.mp3",
                                                   "volume":  0.65,
                                                   "minIntervalMs":  90
                                               },
                                 "explosion":  {
                                                   "file":  "explosion.mp3",
                                                   "volume":  0.74,
                                                   "minIntervalMs":  70
                                               },
                                 "UFO_ray":  {
                                                  "file":  "UFO_ray.mp3",
                                                  "volume":  0.67,
                                                  "minIntervalMs":  150
                                              },
                                 "splat":  {
                                                "file":  "splat.mp3",
                                                "volume":  0.65,
                                                "minIntervalMs":  80
                                            },
                                 "error":  {
                                                "file":  "error.mp3",
                                                "volume":  0.70
                                            },
                                 "each_and_everything":  {
                                                              "file":  "each_and_everything.mp3",
                                                              "volume":  0.95
                                                          },
                                 "wwwwtsactp":  {
                                                    "file":  "wwwwtsactp.mp3",
                                                    "volume":  0.95,
                                                    "loop":  true
                                                },
                                 "level_start":  {
                                                     "file":  "level_start.mp3",
                                                     "volume":  0.77,
                                                     "minIntervalMs":  1000
                                                 },
                                 "select":  {
                                                "file":  "select.mp3",
                                                "volume":  0.65,
                                                "minIntervalMs":  80
                                            },
                                 "accept":  {
                                                "file":  "accept.mp3",
                                                "volume":  0.68,
                                                "minIntervalMs":  80
                                            },
                                 "deny":  {
                                              "file":  "deny.mp3",
                                              "volume":  0.63,
                                              "minIntervalMs":  120
                                          },
                                 "empty_clip":  {
                                                    "file":  "empty_clip.mp3",
                                                    "volume":  0.59,
                                                    "minIntervalMs":  300
                                                },
                                 "gun_reload":  {
                                                    "file":  "gun_reload.mp3",
                                                    "volume":  0.63,
                                                    "minIntervalMs":  200
                                                },
                                 "warning":  {
                                                 "file":  "warning.mp3",
                                                 "volume":  0.72,
                                                 "minIntervalMs":  400
                                             },
                                 "big_boom":  {
                                                  "file":  "big_boom.mp3",
                                                  "volume":  0.83,
                                                  "minIntervalMs":  80
                                              },
                                 "main_theme":  {
                                                    "file":  "psychronic-interstellar-anomaly.mp3",
                                                    "volume":  0.55,
                                                    "loop":  true
                                                }
                             },
                  "weaponShot":  {
                                     "gun":  "gun_shot",
                                     "gun2":  "gun_shot",
                                     "gun3":  "gun_shot",
                                     "shotgun":  "shotgun",
                                     "shotgun2":  "shotgun",
                                     "shotgun3":  "shotgun",
                                     "laser":  "laser_shot",
                                     "laser2":  "laser_shot",
                                     "pulse":  "pulse_shot",
                                     "pulse2":  "pulse_shot",
                                     "pulse3":  "meow",
                                     "rockets":  "rocket_launch",
                                     "rockets2":  "rocket_launch",
                                     "rockets3":  "rocket_launch",
                                     "rocket_launcher":  "rocket_launch",
                                     "big_papa":  "rocket_launch",
                                     "little_boy":  "rocket_launch",
                                     "moon_syringe":  "syringe",
                                     "corrosive_syringe":  "syringe",
                                     "mayo":  "squash",
                                     "wasabi_mayo":  "squash"
                                 },
                  "events":  {
                                 "bugDeath":  "bug_splat",
                                 "explosion":  "explosion",
                                 "ufoRay":  "UFO_ray",
                                 "coat":  "splat",
                                 "levelStart":  "level_start",
                                 "warning":  "warning",
                                 "emptyClip":  "empty_clip",
                                 "reload":  "gun_reload",
                                 "select":  "select",
                                 "accept":  "accept",
                                 "deny":  "deny",
                                 "bigBoom":  "big_boom",
                                 "mainTheme":  "main_theme",
                                 "error":  "error",
                                 "eachAndEverything":  "each_and_everything",
                                 "wwwwtsactp":  "wwwwtsactp"
                             },
                  "continuous":  {
                                      "flamethrowerStartKey":  "flamethrower_start",
                                      "flamethrowerLoopKey":  "flamethrower_continue",
                                      "flamethrowerLoopDelayMs":  380,
                                      "electricLoopKey":  "electric"
                                  }
              },
    "economy":  {
                    "defaultOwnedPrimary":  [
                                                "gun"
                                            ],
                    "defaultOwnedSecondary":  [

                                              ]
                },
    "upgradeConfig":  {
                          "primary":  {
                                          "fireRate":  {
                                                           "maxLvl":  5,
                                                           "costByLevel":  [
                                                                               100,
                                                                               200,
                                                                               300,
                                                                               400,
                                                                               500
                                                                           ]
                                                       },
                                          "clipSize":  {
                                                           "maxLvl":  5,
                                                           "costByLevel":  [
                                                                               100,
                                                                               200,
                                                                               300,
                                                                               400,
                                                                               500
                                                                           ]
                                                       },
                                          "reloadSpeed":  {
                                                              "maxLvl":  5,
                                                              "costByLevel":  [
                                                                                  100,
                                                                                  200,
                                                                                  300,
                                                                                  400,
                                                                                  500
                                                                              ]
                                                          }
                                      },
                          "secondary":  {
                                            "categories":  {
                                                               "rockets":  [
                                                                               {
                                                                                   "key":  "reloadSpeed",
                                                                                   "label":  "Reload Speed",
                                                                                   "maxLvl":  5
                                                                               },
                                                                               {
                                                                                   "key":  "amount",
                                                                                   "label":  "Amount",
                                                                                   "maxLvl":  2
                                                                               },
                                                                               {
                                                                                   "key":  "flightSpeed",
                                                                                   "label":  "Flight Speed",
                                                                                   "maxLvl":  5
                                                                               }
                                                                           ],
                                                               "rocket_launcher":  [
                                                                                       {
                                                                                           "key":  "blastRadius",
                                                                                           "label":  "Blast Radius",
                                                                                           "maxLvl":  5
                                                                                       },
                                                                                       {
                                                                                           "key":  "reloadSpeed",
                                                                                           "label":  "Reload Speed",
                                                                                           "maxLvl":  5
                                                                                       },
                                                                                       {
                                                                                           "key":  "flightSpeed",
                                                                                           "label":  "Flight Speed",
                                                                                           "maxLvl":  5
                                                                                       }
                                                                                   ],
                                                               "freeze":  [
                                                                              {
                                                                                  "key":  "blastRadius",
                                                                                  "label":  "Blast Radius",
                                                                                  "maxLvl":  5
                                                                              },
                                                                              {
                                                                                  "key":  "amount",
                                                                                  "label":  "Amount",
                                                                                  "maxLvl":  2
                                                                              },
                                                                              {
                                                                                  "key":  "flightSpeed",
                                                                                  "label":  "Flight Speed",
                                                                                  "maxLvl":  5
                                                                              }
                                                                          ],
                                                               "nuclear":  [
                                                                               {
                                                                                   "key":  "blastRadius",
                                                                                   "label":  "Blast Radius",
                                                                                   "maxLvl":  5
                                                                               },
                                                                               {
                                                                                   "key":  "reloadSpeed",
                                                                                   "label":  "Reload Speed",
                                                                                   "maxLvl":  5
                                                                               },
                                                                               {
                                                                                   "key":  "flightSpeed",
                                                                                   "label":  "Flight Speed",
                                                                                   "maxLvl":  5
                                                                               }
                                                                           ],
                                                               "mayo":  [
                                                                             {
                                                                                 "key":  "reloadSpeed",
                                                                                 "label":  "Recharge Speed",
                                                                                 "maxLvl":  5
                                                                             },
                                                                             {
                                                                                 "key":  "blastRadius",
                                                                                 "label":  "Spray Range",
                                                                                 "maxLvl":  5
                                                                             }
                                                                         ]
                                                           },
                                            "costs":  {
                                                          "baseCostByLevel":  [
                                                                                  100,
                                                                                  200,
                                                                                  300,
                                                                                  400,
                                                                                  500
                                                                              ],
                                                          "amountCostByLevel":  [
                                                                                    1000,
                                                                                    2000
                                                                                ],
                                                          "categoryMultiplier":  {
                                                                                     "nuclear":  2
                                                                                 }
                                                      }
                                        }
                      },
    "shipSystems":  {
                        "armor":  {
                                      "title":  "Armor",
                                      "levels":  [
                                                     {
                                                         "name":         "Default Armor",
                                                         "description":  "Standard hull plating.",
                                                         "cost":         0,
                                                         "hitsLeft":     1
                                                     },
                                                     {
                                                         "name":         "Heavy Armor",
                                                         "description":  "Reinforced steel plating. Provides protection against 2 hits before destruction.",
                                                         "cost":         5000,
                                                         "hitsLeft":     2
                                                     },
                                                     {
                                                         "name":         "Elite Armor",
                                                         "description":  "Military-grade armor alloy. Provides protection against 3 hits before destruction.",
                                                         "cost":         10000,
                                                         "hitsLeft":     3
                                                     }
                                                 ]
                                  },
                        "engine":  {
                                       "title":  "Engines",
                                       "levels":  [
                                                      {
                                                          "name":         "Jet Engines",
                                                          "description":  "Standard ion thrusters. Baseline turn and movement speed.",
                                                          "cost":         0,
                                                          "speedMult":    1.0
                                                      },
                                                      {
                                                          "name":         "Additional Engines",
                                                          "description":  "Extra engine pods provide lateral thrust. Improved turning and strafing capabilities.",
                                                          "cost":         2500,
                                                          "speedMult":    1.25
                                                      },
                                                      {
                                                          "name":         "Side Thrusters",
                                                          "description":  "Full thruster array for maximum agility. Greatly improved turning and strafing capabilities.",
                                                          "cost":         5000,
                                                          "speedMult":    1.5
                                                      }
                                                  ]
                                   },
                        "selfDestruct":  {
                                             "title":  "Self-Destruct",
                                             "baseBlastRadius":  350,
                                             "levels":  [
                                                            {
                                                                "name":         "Default Module",
                                                                "description":  "Basic explosive charge that detonates when the ship is destroyed.",
                                                                "cost":         0,
                                                                "radiusMult":   0.5
                                                            },
                                                            {
                                                                "name":         "Wired TNT",
                                                                "description":  "Larger TNT carge that creates a bigger explosion on death.",
                                                                "cost":         5000,
                                                                "radiusMult":   0.75
                                                            },
                                                            {
                                                                "name":         "Wired Little Boy",
                                                                "description":  "Nuclear-grade warhead wired to explode on death. Massive blast radius that annihilates enemies caught in the explosion.",
                                                                "cost":         15000,
                                                                "radiusMult":   1.0
                                                            }
                                                        ]
                                         },
                        "protection":  {
                                           "eachAndEverything":  {
                                                                      "name":         "Each & Everything",
                                                                      "description":  "Trustworthy protection system that will block up to 3 enemies. Reloads in 30s.",
                                                                      "cost":         2000,
                                                                      "hitsLeft":     3,
                                                                      "reloadSeconds":  30
                                                                  },
                                           "wwwwtsactp":  {
                                                              "name":         "WWWWTSACTP",
                                                              "description":  "World Wide Web Wide Threat Shielding and Countermeasure Tactical Protocol. Deploys a protective portable pop-up shield that takes out enemies and reloads 30s after destruction",
                                                              "cost":         5000,
                                                              "hitsLeft":     5,
                                                              "reloadSeconds":  30
                                                          },
                                           "seraphSecure":  {
                                                                "name":         "Seraph Secure",
                                                                "description":  "Protects your skip button for you and renews at no additional cost.",
                                                                "cost":         10000,
                                                                "hitsLeft":     3,
                                                                "reloadSeconds":  30,
                                                                "domeRadius":   62
                                                            }
                                       }
                    }
}

;
