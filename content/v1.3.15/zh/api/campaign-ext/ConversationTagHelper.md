---
title: "ConversationTagHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationTagHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationTagHelper

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ConversationTagHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/Tags/ConversationTagHelper.cs`

## 概述

`ConversationTagHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ConversationTagHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### UsesHighRegister
`public static bool UsesHighRegister(CharacterObject character)`

**用途 / Purpose:** 处理 `uses high register` 相关逻辑。

### UsesLowRegister
`public static bool UsesLowRegister(CharacterObject character)`

**用途 / Purpose:** 处理 `uses low register` 相关逻辑。

### TribalVoiceGroup
`public static bool TribalVoiceGroup(CharacterObject character)`

**用途 / Purpose:** 处理 `tribal voice group` 相关逻辑。

### EducatedClass
`public static bool EducatedClass(CharacterObject character)`

**用途 / Purpose:** 处理 `educated class` 相关逻辑。

### TraitCompatibility
`public static int TraitCompatibility(Hero hero1, Hero hero2, TraitObject trait)`

**用途 / Purpose:** 处理 `trait compatibility` 相关逻辑。

## 使用示例

```csharp
ConversationTagHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)