<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LeaveKingdomAsClanBarterable`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LeaveKingdomAsClanBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LeaveKingdomAsClanBarterable : Barterable`
**Base:** `Barterable`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/LeaveKingdomAsClanBarterable.cs`

## 概述

`LeaveKingdomAsClanBarterable` 位于 `TaleWorlds.CampaignSystem.BarterSystem.Barterables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.BarterSystem.Barterables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**用途 / Purpose:** 获取 `unit value for faction` 的当前值。

### CheckBarterLink
`public override void CheckBarterLink(Barterable linkedBarterable)`

**用途 / Purpose:** 处理 `check barter link` 相关逻辑。

### IsCompatible
`public override bool IsCompatible(Barterable barterable)`

**用途 / Purpose:** 处理 `is compatible` 相关逻辑。

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**用途 / Purpose:** 获取 `visual identifier` 的当前值。

### GetEncyclopediaLink
`public override string GetEncyclopediaLink()`

**用途 / Purpose:** 获取 `encyclopedia link` 的当前值。

### Apply
`public override void Apply()`

**用途 / Purpose:** 将 `apply` 应用到当前对象。

## 使用示例

```csharp
var value = new LeaveKingdomAsClanBarterable();
value.GetUnitValueForFaction(faction);
```

## 参见

- [完整类目录](../catalog)