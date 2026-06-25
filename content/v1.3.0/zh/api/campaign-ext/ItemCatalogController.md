---
title: "ItemCatalogController"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemCatalogController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemCatalogController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class ItemCatalogController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/ItemCatalogController.cs`

## 概述

`ItemCatalogController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ItemCatalogController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllItems` | `public MBReadOnlyList<ItemObject> AllItems { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### BeforeCatalogTickDelegate
`public delegate void BeforeCatalogTickDelegate(int currentItemIndex)`

**用途 / Purpose:** 处理 `before catalog tick delegate` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ItemCatalogController>();
```

## 参见

- [完整类目录](../catalog)