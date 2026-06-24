<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Engineering`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Engineering

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Engineering`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Engineering` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Scaffolds` | `public static PerkObject Scaffolds { get; }` |
| `TorsionEngines` | `public static PerkObject TorsionEngines { get; }` |
| `SiegeWorks` | `public static PerkObject SiegeWorks { get; }` |
| `DungeonArchitect` | `public static PerkObject DungeonArchitect { get; }` |
| `Carpenters` | `public static PerkObject Carpenters { get; }` |
| `MilitaryPlanner` | `public static PerkObject MilitaryPlanner { get; }` |
| `WallBreaker` | `public static PerkObject WallBreaker { get; }` |
| `DreadfulSieger` | `public static PerkObject DreadfulSieger { get; }` |
| `Salvager` | `public static PerkObject Salvager { get; }` |
| `Foreman` | `public static PerkObject Foreman { get; }` |
| `Stonecutters` | `public static PerkObject Stonecutters { get; }` |
| `SiegeEngineer` | `public static PerkObject SiegeEngineer { get; }` |
| `CampBuilding` | `public static PerkObject CampBuilding { get; }` |
| `Battlements` | `public static PerkObject Battlements { get; }` |
| `EngineeringGuilds` | `public static PerkObject EngineeringGuilds { get; }` |
| `Apprenticeship` | `public static PerkObject Apprenticeship { get; }` |
| `Metallurgy` | `public static PerkObject Metallurgy { get; }` |
| `ImprovedTools` | `public static PerkObject ImprovedTools { get; }` |
| `Clockwork` | `public static PerkObject Clockwork { get; }` |
| `ArchitecturalCommisions` | `public static PerkObject ArchitecturalCommisions { get; }` |
| `Masterwork` | `public static PerkObject Masterwork { get; }` |

## 使用示例

```csharp
var example = new Engineering();
```

## 参见

- [完整类目录](../catalog)