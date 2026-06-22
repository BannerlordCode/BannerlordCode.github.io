<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationAnimationManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationAnimationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationAnimationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationAnimationManager.cs`

## 概述

`ConversationAnimationManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConversationAnims` | `public Dictionary<string, ConversationAnimData> ConversationAnims { get; }` |

## 使用示例

```csharp
// ConversationAnimationManager (Manager) 的典型用法
ConversationAnimationManager.Current;
```

## 参见

- [完整类目录](../catalog)