<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignOptions`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignOptions.cs`

## 概述

`CampaignOptions` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLifeDeathCycleDisabled` | `public static bool IsLifeDeathCycleDisabled { get; set; }` |
| `AutoAllocateClanMemberPerks` | `public static bool AutoAllocateClanMemberPerks { get; set; }` |
| `IsIronmanMode` | `public static bool IsIronmanMode { get; set; }` |
| `PlayerTroopsReceivedDamage` | `public static Difficulty PlayerTroopsReceivedDamage { get; set; }` |
| `RecruitmentDifficulty` | `public static Difficulty RecruitmentDifficulty { get; set; }` |
| `PlayerMapMovementSpeed` | `public static Difficulty PlayerMapMovementSpeed { get; set; }` |
| `StealthAndDisguiseDifficulty` | `public static Difficulty StealthAndDisguiseDifficulty { get; set; }` |
| `CombatAIDifficulty` | `public static Difficulty CombatAIDifficulty { get; set; }` |
| `PersuasionSuccessChance` | `public static Difficulty PersuasionSuccessChance { get; set; }` |
| `ClanMemberDeathChance` | `public static Difficulty ClanMemberDeathChance { get; set; }` |
| `BattleDeath` | `public static Difficulty BattleDeath { get; set; }` |

## 使用示例

```csharp
var example = new CampaignOptions();
```

## 参见

- [完整类目录](../catalog)