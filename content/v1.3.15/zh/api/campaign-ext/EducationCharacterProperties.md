---
title: "EducationCharacterProperties"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EducationCharacterProperties`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationCharacterProperties

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public struct EducationCharacterProperties`
**领域:** campaign-ext

## 概述

`EducationCharacterProperties` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PageCount` | `public int PageCount { get; }` |
| `Options` | `public IEnumerable<EducationCampaignBehavior.EducationOption> Options { get; }` |

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### GetOptionProperties
`public void GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out ValueTuple<CharacterAttribute, int> attributes, out ValueTuple<SkillObject, int> skills, out ValueTuple<SkillObject, int> focusPoints, out EducationCampaignBehavior.EducationCharacterProperties educationCharacterProperties)`

**用途 / Purpose:** 获取 `option properties` 的当前值。

### GetPageProperties
`public void GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCampaignBehavior.EducationCharacterProperties defaultCharacterProperties, out string availableOptions)`

**用途 / Purpose:** 获取 `page properties` 的当前值。

### IsValidEducationNotification
`public bool IsValidEducationNotification(EducationMapNotification data)`

**用途 / Purpose:** 处理 `is valid education notification` 相关逻辑。

### GetStageProperties
`public void GetStageProperties(Hero child, out int pageCount)`

**用途 / Purpose:** 获取 `stage properties` 的当前值。

### Finalize
`public void Finalize(Hero child, List<string> chosenOptions)`

**用途 / Purpose:** 处理 `finalize` 相关逻辑。

### OnConsequence
`public void OnConsequence(Hero child)`

**用途 / Purpose:** 当 `consequence` 事件触发时调用此方法。

### EducationOptionConditionDelegate
`public delegate bool EducationOptionConditionDelegate(EducationCampaignBehavior.EducationOption option, List<EducationCampaignBehavior.EducationOption> previousOptions)`

**用途 / Purpose:** 处理 `education option condition delegate` 相关逻辑。

### EducationOptionConsequenceDelegate
`public delegate bool EducationOptionConsequenceDelegate(EducationCampaignBehavior.EducationOption option)`

**用途 / Purpose:** 处理 `education option consequence delegate` 相关逻辑。

### AddPage
`public EducationCampaignBehavior.EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCampaignBehavior.EducationCharacterProperties childProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationCharacterProperties specialCharacterProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationPage.EducationPageConditionDelegate condition = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `page`。

### GetOption
`public EducationCampaignBehavior.EducationOption GetOption(string optionKey)`

**用途 / Purpose:** 获取 `option` 的当前值。

### GetPage
`public EducationCampaignBehavior.EducationPage GetPage(List<string> previousOptionKeys)`

**用途 / Purpose:** 获取 `page` 的当前值。

### StringIdToEducationOption
`public List<EducationCampaignBehavior.EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)`

**用途 / Purpose:** 处理 `string id to education option` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public bool Equals(EducationCampaignBehavior.EducationCharacterProperties other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetUsedHandBoneIndex
`public sbyte GetUsedHandBoneIndex()`

**用途 / Purpose:** 获取 `used hand bone index` 的当前值。

### AddOption
`public void AddOption(EducationCampaignBehavior.EducationOption option)`

**用途 / Purpose:** 向当前集合/状态中添加 `option`。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 EducationCharacterProperties 实例，再调用它的公开方法
var value = new EducationCharacterProperties();
value.SyncData(dataStore);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
