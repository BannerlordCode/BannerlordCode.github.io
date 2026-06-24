<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DecisionOutcome`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DecisionOutcome`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/DecisionOutcome.cs`

## 概述

`DecisionOutcome` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Support` | `public float Support { get; }` |
| `InitialSupport` | `public float InitialSupport { get; set; }` |
| `Likelihood` | `public float Likelihood { get; set; }` |
| `TotalSupportPoints` | `public float TotalSupportPoints { get; set; }` |
| `WinChance` | `public float WinChance { get; set; }` |

## 主要方法

### GetDecisionTitle
`public abstract TextObject GetDecisionTitle()`

**用途 / Purpose:** 获取 `decision title` 的当前值。

### GetDecisionDescription
`public abstract TextObject GetDecisionDescription()`

**用途 / Purpose:** 获取 `decision description` 的当前值。

### GetDecisionLink
`public abstract string GetDecisionLink()`

**用途 / Purpose:** 获取 `decision link` 的当前值。

### GetDecisionImageIdentifier
`public abstract ImageIdentifier GetDecisionImageIdentifier()`

**用途 / Purpose:** 获取 `decision image identifier` 的当前值。

### AddSupport
`public void AddSupport(Supporter supporter)`

**用途 / Purpose:** 向当前集合/状态中添加 `support`。

### ResetSupport
`public void ResetSupport(Supporter supporter)`

**用途 / Purpose:** 将 `support` 重置为初始状态。

### SetSponsor
`public void SetSponsor(Clan sponsorClan)`

**用途 / Purpose:** 设置 `sponsor` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomDecisionOutcome();
```

## 参见

- [完整类目录](../catalog)