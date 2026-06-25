---
title: "ChatLogMessageManager"
description: "ChatLogMessageManager 的自动生成类参考。"
---
# ChatLogMessageManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**Base:** `MessageManagerBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## 概述

`ChatLogMessageManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ChatLogMessageManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ChatLineData
`public struct ChatLineData(string text, uint color)`

**用途 / Purpose:** 获取或维护 「chat line data」 数据。

```csharp
// 先通过子系统 API 拿到 ChatLogMessageManager 实例
ChatLogMessageManager chatLogMessageManager = ...;
var result = chatLogMessageManager.ChatLineData("example", 0);
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 ChatLogMessageManager 实例
ChatLogMessageManager chatLogMessageManager = ...;
chatLogMessageManager.Update();
```

## 使用示例

```csharp
var manager = ChatLogMessageManager.Current;
```

## 参见

- [本区域目录](../)