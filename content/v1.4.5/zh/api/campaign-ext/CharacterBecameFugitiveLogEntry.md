---
title: "CharacterBecameFugitiveLogEntry"
description: "CharacterBecameFugitiveLogEntry 的自动生成类参考。"
---
# CharacterBecameFugitiveLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterBecameFugitiveLogEntry : LogEntry, IEncyclopediaLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/CharacterBecameFugitiveLogEntry.cs`

## 概述

`CharacterBecameFugitiveLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CharacterBecameFugitiveLogEntry 实例
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
var result = characterBecameFugitiveLogEntry.ToString();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**用途 / Purpose:** 读取并返回当前对象中 encyclopedia text 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterBecameFugitiveLogEntry 实例
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
var result = characterBecameFugitiveLogEntry.GetEncyclopediaText();
```

### IsValid
`public override bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 valid 状态或条件。

```csharp
// 先通过子系统 API 拿到 CharacterBecameFugitiveLogEntry 实例
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
var result = characterBecameFugitiveLogEntry.IsValid();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterBecameFugitiveLogEntry characterBecameFugitiveLogEntry = ...;
characterBecameFugitiveLogEntry.ToString();
```

## 参见

- [本区域目录](../)