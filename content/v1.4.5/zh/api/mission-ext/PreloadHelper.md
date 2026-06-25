---
title: "PreloadHelper"
description: "PreloadHelper 的自动生成类参考。"
---
# PreloadHelper

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PreloadHelper`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/PreloadHelper.cs`

## 概述

`PreloadHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PreloadHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### PreloadCharacters
`public void PreloadCharacters(List<BasicCharacterObject> characters)`

**用途 / Purpose:** 调用 PreloadCharacters 对应的操作。

```csharp
// 先通过子系统 API 拿到 PreloadHelper 实例
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadCharacters(characters);
```

### WaitForMeshesToBeLoaded
`public void WaitForMeshesToBeLoaded()`

**用途 / Purpose:** 暂停当前流程，直到for meshes to be loaded条件满足。

```csharp
// 先通过子系统 API 拿到 PreloadHelper 实例
PreloadHelper preloadHelper = ...;
preloadHelper.WaitForMeshesToBeLoaded();
```

### PreloadEquipments
`public void PreloadEquipments(List<Equipment> equipments)`

**用途 / Purpose:** 调用 PreloadEquipments 对应的操作。

```csharp
// 先通过子系统 API 拿到 PreloadHelper 实例
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadEquipments(equipments);
```

### PreloadItems
`public void PreloadItems(List<ItemObject> items)`

**用途 / Purpose:** 调用 PreloadItems 对应的操作。

```csharp
// 先通过子系统 API 拿到 PreloadHelper 实例
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadItems(items);
```

### PreloadEntities
`public void PreloadEntities(List<WeakGameEntity> entities)`

**用途 / Purpose:** 调用 PreloadEntities 对应的操作。

```csharp
// 先通过子系统 API 拿到 PreloadHelper 实例
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadEntities(entities);
```

### PreloadMeshesAndPhysics
`public void PreloadMeshesAndPhysics()`

**用途 / Purpose:** 调用 PreloadMeshesAndPhysics 对应的操作。

```csharp
// 先通过子系统 API 拿到 PreloadHelper 实例
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadMeshesAndPhysics();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 PreloadHelper 实例
PreloadHelper preloadHelper = ...;
preloadHelper.Clear();
```

## 使用示例

```csharp
PreloadHelper.Initialize();
```

## 参见

- [本区域目录](../)