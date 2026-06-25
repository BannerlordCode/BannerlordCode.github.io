---
title: "StoryModeVoiceOverModel"
description: "StoryModeVoiceOverModel 的自动生成类参考。"
---
# StoryModeVoiceOverModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeVoiceOverModel : VoiceOverModel`
**Base:** `VoiceOverModel`
**File:** `StoryMode/GameComponents/StoryModeVoiceOverModel.cs`

## 概述

`StoryModeVoiceOverModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeVoiceOverModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSoundPathForCharacter
`public override string GetSoundPathForCharacter(CharacterObject character, VoiceObject voiceObject)`

**用途 / Purpose:** 读取并返回当前对象中 sound path for character 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeVoiceOverModel 实例
StoryModeVoiceOverModel storyModeVoiceOverModel = ...;
var result = storyModeVoiceOverModel.GetSoundPathForCharacter(character, voiceObject);
```

### GetAccentClass
`public override string GetAccentClass(CultureObject culture, bool isHighClass)`

**用途 / Purpose:** 读取并返回当前对象中 accent class 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeVoiceOverModel 实例
StoryModeVoiceOverModel storyModeVoiceOverModel = ...;
var result = storyModeVoiceOverModel.GetAccentClass(culture, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeVoiceOverModel>(new MyStoryModeVoiceOverModel());
```

## 参见

- [本区域目录](../)