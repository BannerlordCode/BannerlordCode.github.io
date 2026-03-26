---
title: 资源管线 / Asset Pipeline
description: 添加自定义网格、纹理、音效 / Adding custom meshes, textures, sounds
---

# 资源管线 / Asset Pipeline

**Related APIs**: `TaleWorlds.Engine`, `TaleWorlds.Core`

## 概述 / Overview

Bannerlord 的资源系统基于 XML 定义和原生资产管理。了解如何添加自定义网格、纹理和音效对于创建完整的 Mod 至关重要。

Bannerlord's asset system is based on XML definitions and native asset management. Understanding how to add custom meshes, textures, and sounds is essential for creating complete mods.

## 目录 / Contents

1. [资源类型](#资源类型)
2. [项目结构](#项目结构)
3. [XML 资源定义](#xml-资源定义)
4. [代码加载](#代码加载)

---

## 资源类型

| 类型 | 格式 | 位置 |
|------|------|------|
| 网格 | `.mesh` (原生格式) | `Assets/meshes/` |
| 纹理 | `.dds`, `.tga` | `Assets/textures/` |
| 音效 | `.wav`, `.ogg` | `Assets/sounds/` |
| XML 配置 | `.xml` | `ModuleData/` |

---

## 项目结构

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
│   ├── my_items.xml      # 物品定义
│   ├── my_armors.xml     # 护甲定义
│   └── my_characters.xml # 角色定义
└── Guis/
    └── gauntlet/
        └── my_ui.gui     # UI 定义
```

---

## XML 资源定义

### 物品定义示例

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

### 角色定义示例

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

## 代码加载

### 加载资源

```csharp
// 通过 MBObjectManager 加载
MBObjectManager objectManager = MBObjectManager.Find("core");

// 获取物品
ItemObject item = objectManager.GetObject<ItemObject>("my_item");

// 获取角色
CharacterObject character = objectManager.GetObject<CharacterObject>("my_character");
```

### 动态创建资源引用

```csharp
// 在代码中引用资源
GameEntity entity = scene.AddEntity();
// 设置网格
entity.SetMeshWithMaterial("my_mesh", "my_material");
```

---

## 相关文档 / Related Documentation

- [XML 参考](../xml-reference/index.md)
- [MBObjectManager API](../api/core/MBObjectManager.md)
- [Engine Utilities](../api/engine/Utilities.md)

---

## 下一节 / Next Section

- [本地化](./localization.md) - 多语言支持
- [常见模式](./common-patterns.md) - 最佳实践
