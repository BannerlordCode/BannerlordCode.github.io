<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommonTownsfolkCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CommonTownsfolkCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class CommonTownsfolkCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/CommonTownsfolkCampaignBehavior.cs`

## 概述

`CommonTownsfolkCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### GetActionSetSuffixAndMonsterForItem
`public static string GetActionSetSuffixAndMonsterForItem(string itemId, int race, bool isFemale, out Monster monster)`

**用途 / Purpose:** 获取 `action set suffix and monster for item` 的当前值。

### GetRandomTownsManActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsManActionSetAndMonster(int race)`

**用途 / Purpose:** 获取 `random towns man action set and monster` 的当前值。

### GetRandomTownsWomanActionSetAndMonster
`public static Tuple<string, Monster> GetRandomTownsWomanActionSetAndMonster(int race)`

**用途 / Purpose:** 获取 `random towns woman action set and monster` 的当前值。

### CreateBroomsWoman
`public static LocationCharacter CreateBroomsWoman(CultureObject culture, CharacterRelations relation)`

**用途 / Purpose:** 创建一个 `brooms woman` 实例或对象。

### CreateMaleBeggar
`public static LocationCharacter CreateMaleBeggar(CultureObject culture, CharacterRelations relation)`

**用途 / Purpose:** 创建一个 `male beggar` 实例或对象。

### CreateFemaleBeggar
`public static LocationCharacter CreateFemaleBeggar(CultureObject culture, CharacterRelations relation)`

**用途 / Purpose:** 创建一个 `female beggar` 实例或对象。

## 使用示例

```csharp
var value = new CommonTownsfolkCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)