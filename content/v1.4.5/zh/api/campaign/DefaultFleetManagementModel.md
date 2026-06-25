---
title: "DefaultFleetManagementModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultFleetManagementModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultFleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**Base:** `FleetManagementModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultFleetManagementModel.cs`

## 概述

`DefaultFleetManagementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultFleetManagementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanSendShipToPlayerClan
`public override bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)`

**用途 / Purpose:** 判断当前对象是否可以执行 `send ship to player clan`。

### CanTroopsReturn
`public override bool CanTroopsReturn()`

**用途 / Purpose:** 判断当前对象是否可以执行 `troops return`。

### GetReturnTimeForTroops
`public override CampaignTime GetReturnTimeForTroops(Ship ship)`

**用途 / Purpose:** 获取 `return time for troops` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel());
```

## 参见

- [完整类目录](../catalog)