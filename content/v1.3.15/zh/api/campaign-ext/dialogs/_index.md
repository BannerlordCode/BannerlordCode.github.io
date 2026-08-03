---
title: "Dialogs 家族"
description: "战役对话的数据流、参与者上下文、选项回调与向 Action/Quest 的安全交接。"
---

# Dialogs 家族

**一句话职责：** Dialog API 把战役参与者和状态变成对话行与选项，玩家选择后再把控制权交给 Action 或 Quest。

## 心智模型与阅读顺序

先读 [CampaignMapConversation](../CampaignMapConversation) 与 [ConversationManager](../ConversationManager)，再读 [ConversationSentence](../ConversationSentence) 和 [ConversationSentenceOption](../ConversationSentenceOption)。注册由 [CampaignGameStarter](../CampaignGameStarter) 所有。

## 何时使用

玩家可见的分支对话使用 Dialog；世界变更交给 Action，多步骤后续交给 Quest。不要在条件回调中直接修改 Hero 或 Settlement 字段。

## 依赖关系

- 上游：战役参与者、`ConversationContext` 与战役事件状态。
- 下游：选项回调、[Actions](../actions)、[Quests](../quests) 与 UI。
- 同级：[GameMenus](../gamemenus)、[Issues](../issues)。

## 最小真实入口

```csharp
starter.AddPlayerLine("my_line", "start", "reply", condition, consequence, null);
```

使用当前版本 `CampaignGameStarter` 的真实重载，并保持 condition 无副作用。

## 风险边界

玩家浏览选项时 condition 可能多次执行。变更必须经由 Action，并在 consequence 中再次验证参与者。

## 导航

- [上级：Campaign-Ext](..)
- [同级：GameMenus](../gamemenus) · [Quests](../quests)
- [相关：CampaignEvents](../CampaignEvents)
