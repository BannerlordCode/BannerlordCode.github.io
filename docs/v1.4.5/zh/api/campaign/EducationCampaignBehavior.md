<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EducationCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EducationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/EducationCampaignBehavior.cs`

## 概述

`EducationCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### EducationOptionConditionDelegate
`public delegate bool EducationOptionConditionDelegate(EducationOption option, List<EducationOption> previousOptions)`

**用途 / Purpose:** 处理 `education option condition delegate` 相关逻辑。

### EducationOptionConsequenceDelegate
`public delegate bool EducationOptionConsequenceDelegate(EducationOption option)`

**用途 / Purpose:** 处理 `education option consequence delegate` 相关逻辑。

### OnConsequence
`public void OnConsequence(Hero child)`

**用途 / Purpose:** 当 `consequence` 事件触发时调用此方法。

### AddPage
`public EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCharacterProperties childProperties = default(EducationCharacterProperties), EducationCharacterProperties specialCharacterProperties = default(EducationCharacterProperties), EducationPage.EducationPageConditionDelegate condition = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `page`。

### GetOption
`public EducationOption GetOption(string optionKey)`

**用途 / Purpose:** 获取 `option` 的当前值。

### GetPage
`public EducationPage GetPage(List<string> previousOptionKeys)`

**用途 / Purpose:** 获取 `page` 的当前值。

### StringIdToEducationOption
`public List<EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)`

**用途 / Purpose:** 处理 `string id to education option` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### EducationCharacterProperties
`public struct EducationCharacterProperties(CharacterObject character, Equipment equipment, string actionId, string prefabId, bool useOffHand)`

**用途 / Purpose:** 处理 `education character properties` 相关逻辑。

### Equals
`public bool Equals(EducationCharacterProperties other)`

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

### EducationPageConditionDelegate
`public delegate bool EducationPageConditionDelegate(EducationPage page, List<EducationOption> previousOptions)`

**用途 / Purpose:** 处理 `education page condition delegate` 相关逻辑。

### AddOption
`public void AddOption(EducationOption option)`

**用途 / Purpose:** 向当前集合/状态中添加 `option`。

### GetOption
`public EducationOption GetOption(string optionKey)`

**用途 / Purpose:** 获取 `option` 的当前值。

### GetAvailableOptions
`public string GetAvailableOptions(List<EducationOption> previousEducationOptions)`

**用途 / Purpose:** 获取 `available options` 的当前值。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### GetOptionProperties
`public void GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out (CharacterAttribute, int) attributes, out (SkillObject, int) skills, out (SkillObject, int) focusPoints, out EducationCharacterProperties educationCharacterProperties)`

**用途 / Purpose:** 获取 `option properties` 的当前值。

### GetPageProperties
`public void GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCharacterProperties defaultCharacterProperties, out string availableOptions)`

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

## 使用示例

```csharp
var value = new EducationCampaignBehavior();
value.EducationOptionConditionDelegate(option, previousOptions);
```

## 参见

- [完整类目录](../catalog)