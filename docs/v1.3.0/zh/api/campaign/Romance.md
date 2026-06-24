<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Romance`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Romance

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Romance`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Romance.cs`

## 概述

`Romance` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RomanticStateList` | `public static List<Romance.RomanticState> RomanticStateList { get; }` |

## 主要方法

### GetCourtedHeroInOtherClan
`public static Hero GetCourtedHeroInOtherClan(Hero person1, Hero person2)`

**用途 / Purpose:** 获取 `courted hero in other clan` 的当前值。

### GetRomanticLevel
`public static Romance.RomanceLevelEnum GetRomanticLevel(Hero person1, Hero person2)`

**用途 / Purpose:** 获取 `romantic level` 的当前值。

### GetRomanticState
`public static Romance.RomanticState GetRomanticState(Hero person1, Hero person2)`

**用途 / Purpose:** 获取 `romantic state` 的当前值。

### Partner
`public Hero Partner(Hero hero)`

**用途 / Purpose:** 处理 `partner` 相关逻辑。

## 使用示例

```csharp
Romance.GetCourtedHeroInOtherClan(person1, person2);
```

## 参见

- [完整类目录](../catalog)