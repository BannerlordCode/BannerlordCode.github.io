---
title: "WeaponComponent"
description: "WeaponComponent 的自动生成类参考。"
---
# WeaponComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/WeaponComponent.cs`

## 概述

`WeaponComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `WeaponComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddWeapon
`public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 将 「weapon」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WeaponComponent 实例
WeaponComponent weaponComponent = ...;
weaponComponent.AddWeapon(weaponComponentData, itemModifierGroup);
```

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** 读取并返回当前对象中 「copy」 的结果。

```csharp
// 先通过子系统 API 拿到 WeaponComponent 实例
WeaponComponent weaponComponent = ...;
var result = weaponComponent.GetCopy();
```

### GetItemType
`public ItemObject.ItemTypeEnum GetItemType()`

**用途 / Purpose:** 读取并返回当前对象中 「item type」 的结果。

```csharp
// 先通过子系统 API 拿到 WeaponComponent 实例
WeaponComponent weaponComponent = ...;
var result = weaponComponent.GetItemType();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 WeaponComponent 实例
WeaponComponent weaponComponent = ...;
weaponComponent.Deserialize(objectManager, node);
```

## 使用示例

```csharp
var component = agent.GetComponent<WeaponComponent>();
```

## 参见

- [本区域目录](../)