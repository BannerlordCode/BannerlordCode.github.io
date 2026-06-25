---
title: "ConversationTagHelper"
description: "ConversationTagHelper 的自动生成类参考。"
---
# ConversationTagHelper

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ConversationTagHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ConversationTagHelper.cs`

## 概述

`ConversationTagHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ConversationTagHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### UsesHighRegister
`public static bool UsesHighRegister(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UsesHighRegister 对应的操作。

```csharp
// 静态调用，不需要实例
ConversationTagHelper.UsesHighRegister(character);
```

### UsesLowRegister
`public static bool UsesLowRegister(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UsesLowRegister 对应的操作。

```csharp
// 静态调用，不需要实例
ConversationTagHelper.UsesLowRegister(character);
```

### TribalVoiceGroup
`public static bool TribalVoiceGroup(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TribalVoiceGroup 对应的操作。

```csharp
// 静态调用，不需要实例
ConversationTagHelper.TribalVoiceGroup(character);
```

### EducatedClass
`public static bool EducatedClass(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EducatedClass 对应的操作。

```csharp
// 静态调用，不需要实例
ConversationTagHelper.EducatedClass(character);
```

### TraitCompatibility
`public static int TraitCompatibility(Hero hero1, Hero hero2, TraitObject trait)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TraitCompatibility 对应的操作。

```csharp
// 静态调用，不需要实例
ConversationTagHelper.TraitCompatibility(hero1, hero2, trait);
```

## 使用示例

```csharp
ConversationTagHelper.Initialize();
```

## 参见

- [本区域目录](../)