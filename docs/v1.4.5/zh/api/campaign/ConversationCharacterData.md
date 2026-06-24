<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationCharacterData`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationCharacterData

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationCharacterData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationCharacterData.cs`

## 概述

`ConversationCharacterData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ConversationCharacterData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ConversationCharacterData
`public struct ConversationCharacterData(CharacterObject character, PartyBase party = null, bool noHorse = false, bool noWeapon = false, bool spawnAfterFight = false, bool isCivilianEquipmentRequiredForLeader = false, bool isCivilianEquipmentRequiredForBodyGuardCharacters = false, bool noBodyguards = false)`

**用途 / Purpose:** 处理 `conversation character data` 相关逻辑。

## 使用示例

```csharp
var value = new ConversationCharacterData();
```

## 参见

- [完整类目录](../catalog)