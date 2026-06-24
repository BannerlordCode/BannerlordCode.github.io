<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Romance`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Romance

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class Romance`
**领域:** campaign-ext

## 概述

`Romance` 位于 `TaleWorlds.CampaignSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
Romance.GetCourtedHeroInOtherClan(person1, person2);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
