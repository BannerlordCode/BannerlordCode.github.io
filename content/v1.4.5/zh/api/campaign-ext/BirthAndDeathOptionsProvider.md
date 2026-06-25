---
title: "BirthAndDeathOptionsProvider"
description: "BirthAndDeathOptionsProvider 的自动生成类参考。"
---
# BirthAndDeathOptionsProvider

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BirthAndDeathOptionsProvider : ICampaignOptionProvider`
**Base:** `ICampaignOptionProvider`
**File:** `Modules.BirthAndDeath/TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath/BirthAndDeathOptionsProvider.cs`

## 概述

`BirthAndDeathOptionsProvider` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGameplayCampaignOptions
`public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()`

**用途 / Purpose:** 读取并返回当前对象中 「gameplay campaign options」 的结果。

```csharp
// 先通过子系统 API 拿到 BirthAndDeathOptionsProvider 实例
BirthAndDeathOptionsProvider birthAndDeathOptionsProvider = ...;
var result = birthAndDeathOptionsProvider.GetGameplayCampaignOptions();
```

### GetCharacterCreationCampaignOptions
`public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**用途 / Purpose:** 读取并返回当前对象中 「character creation campaign options」 的结果。

```csharp
// 先通过子系统 API 拿到 BirthAndDeathOptionsProvider 实例
BirthAndDeathOptionsProvider birthAndDeathOptionsProvider = ...;
var result = birthAndDeathOptionsProvider.GetCharacterCreationCampaignOptions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BirthAndDeathOptionsProvider birthAndDeathOptionsProvider = ...;
birthAndDeathOptionsProvider.GetGameplayCampaignOptions();
```

## 参见

- [本区域目录](../)