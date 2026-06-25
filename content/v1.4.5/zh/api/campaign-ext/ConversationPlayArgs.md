---
title: "ConversationPlayArgs"
description: "ConversationPlayArgs 的自动生成类参考。"
---
# ConversationPlayArgs

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public struct ConversationPlayArgs`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationView.cs`

## 概述

`ConversationPlayArgs` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ConversationPlayArgs 对应的操作。

```csharp
// 先通过子系统 API 拿到 ConversationPlayArgs 实例
ConversationPlayArgs conversationPlayArgs = ...;
var result = conversationPlayArgs.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ConversationPlayArgs conversationPlayArgs = ...;
conversationPlayArgs.ConversationPlayArgs("example", "example", "example", "example", "example");
```

## 参见

- [本区域目录](../)