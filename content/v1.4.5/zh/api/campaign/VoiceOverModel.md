---
title: "VoiceOverModel"
description: "VoiceOverModel 的自动生成类参考。"
---
# VoiceOverModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VoiceOverModel : MBGameModel<VoiceOverModel>`
**Base:** `MBGameModel<VoiceOverModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VoiceOverModel.cs`

## 概述

`VoiceOverModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `VoiceOverModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSoundPathForCharacter
`public abstract string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sound path for character 的结果。

```csharp
// 先通过子系统 API 拿到 VoiceOverModel 实例
VoiceOverModel voiceOverModel = ...;
var result = voiceOverModel.GetSoundPathForCharacter(character, voiceObject);
```

### GetAccentClass
`public abstract string GetAccentClass(CultureObject culture, bool isHighClass)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 accent class 的结果。

```csharp
// 先通过子系统 API 拿到 VoiceOverModel 实例
VoiceOverModel voiceOverModel = ...;
var result = voiceOverModel.GetAccentClass(culture, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VoiceOverModel instance = ...;
```

## 参见

- [本区域目录](../)