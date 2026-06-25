---
title: "ItemCatalogController"
description: "ItemCatalogController 的自动生成类参考。"
---
# ItemCatalogController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class ItemCatalogController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/ItemCatalogController.cs`

## 概述

`ItemCatalogController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ItemCatalogController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllItems` | `public MBReadOnlyList<ItemObject> AllItems { get; }` |

## 主要方法

### BeforeCatalogTickDelegate
`public delegate void BeforeCatalogTickDelegate(int currentItemIndex)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ItemCatalogController 实例
ItemCatalogController itemCatalogController = ...;
itemCatalogController.BeforeCatalogTickDelegate(0);
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ItemCatalogController 实例
ItemCatalogController itemCatalogController = ...;
itemCatalogController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ItemCatalogController 实例
ItemCatalogController itemCatalogController = ...;
itemCatalogController.OnMissionTick(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ItemCatalogController>();
```

## 参见

- [本区域目录](../)