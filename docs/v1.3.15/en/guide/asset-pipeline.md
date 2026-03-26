---
title: Asset Pipeline
description: Adding custom meshes, textures, sounds
---

# Asset Pipeline

**Related APIs**: `TaleWorlds.Engine`, `TaleWorlds.Core`

## Overview

Bannerlord's asset system is based on XML definitions and native asset management. Understanding how to add custom meshes, textures, and sounds is essential for creating complete mods.

## Contents

1. [Asset Types](#asset-types)
2. [Project Structure](#project-structure)
3. [XML Asset Definitions](#xml-asset-definitions)
4. [Code Loading](#code-loading)

---

## Asset Types

| Type | Format | Location |
|------|--------|----------|
| Meshes | `.mesh` (native format) | `Assets/meshes/` |
| Textures | `.dds`, `.tga` | `Assets/textures/` |
| Sounds | `.wav`, `.ogg` | `Assets/sounds/` |
| XML Config | `.xml` | `ModuleData/` |

---

## Project Structure

```
MyModule/
├── Assets/
│   ├── meshes/
│   │   └── my_mesh.mesh
│   ├── textures/
│   │   └── my_texture.dds
│   └── sounds/
│       └── my_sound.wav
├── ModuleData/
│   ├── my_items.xml      # Item definitions
│   ├── my_armors.xml     # Armor definitions
│   └── my_characters.xml # Character definitions
└── Guis/
    └── gauntlet/
        └── my_ui.gui     # UI definitions
```

---

## XML Asset Definitions

### Item Definition Example

```xml
<!-- ModuleData/items.xml -->
<Items>
  <Item id="my_item"
        name="My Item"
        mesh="my_mesh"
        texture="my_texture"
        price="100"
        weight="5"
        Type="OneHandedWeapon">
    <WeaponFlags>
      <WeaponFlag>Melee</WeaponFlag>
    </WeaponFlags>
  </Item>
</Items>
```

### Character Definition Example

```xml
<!-- ModuleData/spcharacters.xml -->
<SPCharacters>
  <Character id="my_character"
             name="My Character"
             face_mesh="typical_face"
             is_female="false"
             age="30">
    <skills>
      <skill name="OneHanded" value="50" />
    </skills>
    <equipment>
      <Equipment slot="Head">itm_faction_helmet</Equipment>
      <Equipment slot="Body">itm_faction_armor</Equipment>
    </equipment>
  </Character>
</SPCharacters>
```

---

## Code Loading

### Load Assets

```csharp
// Load via MBObjectManager
MBObjectManager objectManager = MBObjectManager.Find("core");

// Get item
ItemObject item = objectManager.GetObject<ItemObject>("my_item");

// Get character
CharacterObject character = objectManager.GetObject<CharacterObject>("my_character");
```

### Dynamic Resource Reference

```csharp
// Reference resources in code
GameEntity entity = scene.AddEntity();
// Set mesh
entity.SetMeshWithMaterial("my_mesh", "my_material");
```

---

## Related Documentation

- [XML Reference](../xml-reference/index.md)
- [MBObjectManager API](../api/core/MBObjectManager.md)
- [Engine Utilities](../api/engine/Utilities.md)

---

## Next Section

- [Localization](./localization.md) - Multi-language support
- [Common Patterns](./common-patterns.md) - Best practices
