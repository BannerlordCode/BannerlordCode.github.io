---
title: "ConversationCharacterData"
description: "ConversationCharacterData 的自动生成类参考。"
---
# ConversationCharacterData

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationCharacterData`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationCharacterData.cs`

## 概述

`ConversationCharacterData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ConversationCharacterData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ConversationCharacterData
`public struct ConversationCharacterData(CharacterObject character, PartyBase party = null, bool noHorse = false, bool noWeapon = false, bool spawnAfterFight = false, bool isCivilianEquipmentRequiredForLeader = false, bool isCivilianEquipmentRequiredForBodyGuardCharacters = false, bool noBodyguards = false)`

**用途 / Purpose:** 调用 ConversationCharacterData 对应的操作。

```csharp
// 先通过子系统 API 拿到 ConversationCharacterData 实例
ConversationCharacterData conversationCharacterData = ...;
var result = conversationCharacterData.ConversationCharacterData(character, null, false, false, false, false, false, false);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ConversationCharacterData entry = ...;
```

## 参见

- [本区域目录](../)