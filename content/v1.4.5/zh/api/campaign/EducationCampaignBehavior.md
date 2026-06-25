---
title: "EducationCampaignBehavior"
description: "EducationCampaignBehavior 的自动生成类参考。"
---
# EducationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/EducationCampaignBehavior.cs`

## 概述

`EducationCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### EducationOptionConditionDelegate
`public delegate bool EducationOptionConditionDelegate(EducationOption option, List<EducationOption> previousOptions)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationOptionConditionDelegate(option, previousOptions);
```

### EducationOptionConsequenceDelegate
`public delegate bool EducationOptionConsequenceDelegate(EducationOption option)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationOptionConsequenceDelegate(option);
```

### OnConsequence
`public void OnConsequence(Hero child)`

**用途 / Purpose:** 在 「consequence」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.OnConsequence(child);
```

### AddPage
`public EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCharacterProperties childProperties = default(EducationCharacterProperties), EducationCharacterProperties specialCharacterProperties = default(EducationCharacterProperties), EducationPage.EducationPageConditionDelegate condition = null)`

**用途 / Purpose:** 将 「page」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.AddPage(0, title, description, instruction, default(EducationCharacterProperties), default(EducationCharacterProperties), null);
```

### GetOption
`public EducationOption GetOption(string optionKey)`

**用途 / Purpose:** 读取并返回当前对象中 「option」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetOption("example");
```

### GetPage
`public EducationPage GetPage(List<string> previousOptionKeys)`

**用途 / Purpose:** 读取并返回当前对象中 「page」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetPage(previousOptionKeys);
```

### StringIdToEducationOption
`public List<EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.StringIdToEducationOption(previousOptionKeys);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.ToString();
```

### EducationCharacterProperties
`public struct EducationCharacterProperties(CharacterObject character, Equipment equipment, string actionId, string prefabId, bool useOffHand)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationCharacterProperties(character, equipment, "example", "example", false);
```

### Equals
`public bool Equals(EducationCharacterProperties other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.Equals(other);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetHashCode();
```

### GetUsedHandBoneIndex
`public sbyte GetUsedHandBoneIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「used hand bone index」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetUsedHandBoneIndex();
```

### EducationPageConditionDelegate
`public delegate bool EducationPageConditionDelegate(EducationPage page, List<EducationOption> previousOptions)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.EducationPageConditionDelegate(page, previousOptions);
```

### AddOption
`public void AddOption(EducationOption option)`

**用途 / Purpose:** 将 「option」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.AddOption(option);
```

### GetOption
`public EducationOption GetOption(string optionKey)`

**用途 / Purpose:** 读取并返回当前对象中 「option」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetOption("example");
```

### GetAvailableOptions
`public string GetAvailableOptions(List<EducationOption> previousEducationOptions)`

**用途 / Purpose:** 读取并返回当前对象中 「available options」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.GetAvailableOptions(previousEducationOptions);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.RegisterEvents();
```

### GetOptionProperties
`public void GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out (CharacterAttribute, int) attributes, out (SkillObject, int) skills, out (SkillObject, int) focusPoints, out EducationCharacterProperties educationCharacterProperties)`

**用途 / Purpose:** 读取并返回当前对象中 「option properties」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.GetOptionProperties(child, "example", previousOptions, optionTitle, description, effect, (CharacterAttribute, 0, (SkillObject, 0, (SkillObject, 0, educationCharacterProperties);
```

### GetPageProperties
`public void GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCharacterProperties defaultCharacterProperties, out string availableOptions)`

**用途 / Purpose:** 读取并返回当前对象中 「page properties」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.GetPageProperties(child, previousChoices, title, description, instruction, defaultCharacterProperties, availableOptions);
```

### IsValidEducationNotification
`public bool IsValidEducationNotification(EducationMapNotification data)`

**用途 / Purpose:** 判断当前对象是否处于 「valid education notification」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
var result = educationCampaignBehavior.IsValidEducationNotification(data);
```

### GetStageProperties
`public void GetStageProperties(Hero child, out int pageCount)`

**用途 / Purpose:** 读取并返回当前对象中 「stage properties」 的结果。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.GetStageProperties(child, pageCount);
```

### Finalize
`public void Finalize(Hero child, List<string> chosenOptions)`

**用途 / Purpose:** 在垃圾回收时执行清理工作（通常用于释放非托管资源）。

```csharp
// 先通过子系统 API 拿到 EducationCampaignBehavior 实例
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.Finalize(child, chosenOptions);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EducationCampaignBehavior educationCampaignBehavior = ...;
educationCampaignBehavior.EducationOptionConditionDelegate(option, previousOptions);
```

## 参见

- [本区域目录](../)