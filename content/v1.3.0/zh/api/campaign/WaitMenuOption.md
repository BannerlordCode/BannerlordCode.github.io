---
title: "WaitMenuOption"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WaitMenuOption`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WaitMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WaitMenuOption`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs`

## 概述

`WaitMenuOption` 位于 `TaleWorlds.CampaignSystem.GameMenus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Priority` | `public int Priority { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Tooltip` | `public string Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |

## 主要方法

### GetConditionsHold
`public bool GetConditionsHold(Game game, MapState mapState)`

**用途 / Purpose:** 获取 `conditions hold` 的当前值。

### RunConsequence
`public void RunConsequence(Game game, MapState mapState)`

**用途 / Purpose:** 处理 `run consequence` 相关逻辑。

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** 当 `condition delegate` 事件触发时调用此方法。

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** 当 `consequence delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new WaitMenuOption();
value.GetConditionsHold(game, mapState);
```

## 参见

- [完整类目录](../catalog)