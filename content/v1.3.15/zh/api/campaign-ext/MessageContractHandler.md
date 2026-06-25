---
title: "MessageContractHandler"
description: "MessageContractHandler 的自动生成类参考。"
---
# MessageContractHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `internal class MessageContractHandler<T> : MessageContractHandler where T : MessageContract`
**Base:** `MessageContractHandler where T : MessageContract`
**File:** `TaleWorlds.Network/MessageContractHandler.2.cs`

## 概述

`MessageContractHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MessageContractHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Invoke
`public override void Invoke(MessageContract messageContract)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Invoke 对应的操作。

```csharp
// 先通过子系统 API 拿到 MessageContractHandler 实例
MessageContractHandler messageContractHandler = ...;
messageContractHandler.Invoke(messageContract);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MessageContractHandler>();
```

## 参见

- [本区域目录](../)