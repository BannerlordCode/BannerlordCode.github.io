<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VoiceChatHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VoiceChatHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VoiceChatHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/VoiceChatHandler.cs`

## 概述

`VoiceChatHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `VoiceChatHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsReadyOnPlatform` | `public bool IsReadyOnPlatform { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 当 `pre display mission tick` 事件触发时调用此方法。

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 当 `player disconnected from server` 事件触发时调用此方法。

### WriteVoiceData
`public void WriteVoiceData(byte dataBuffer, int bufferSize)`

**用途 / Purpose:** 处理 `write voice data` 相关逻辑。

### SetReadyOnPlatform
`public void SetReadyOnPlatform()`

**用途 / Purpose:** 设置 `ready on platform` 的值或状态。

### ProcessVoiceData
`public bool ProcessVoiceData()`

**用途 / Purpose:** 处理 `process voice data` 相关逻辑。

### GetVoiceToPlayForTick
`public Queue<short> GetVoiceToPlayForTick()`

**用途 / Purpose:** 获取 `voice to play for tick` 的当前值。

### HasAnyVoiceData
`public bool HasAnyVoiceData()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any voice data`。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new VoiceChatHandler());
```

## 参见

- [完整类目录](../catalog)