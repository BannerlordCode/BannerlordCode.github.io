<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VoiceChatHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VoiceChatHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VoiceChatHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/VoiceChatHandler.cs`

## 概述

`VoiceChatHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnPreDisplayMissionTick
```csharp
public override void OnPreDisplayMissionTick(float dt)
```

### OnPlayerDisconnectedFromServer
```csharp
public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
```

### WriteVoiceData
```csharp
public void WriteVoiceData(byte dataBuffer, int bufferSize)
```

### SetReadyOnPlatform
```csharp
public void SetReadyOnPlatform()
```

### ProcessVoiceData
```csharp
public bool ProcessVoiceData()
```

### GetVoiceToPlayForTick
```csharp
public Queue<short> GetVoiceToPlayForTick()
```

### HasAnyVoiceData
```csharp
public bool HasAnyVoiceData()
```

## 使用示例

```csharp
// VoiceChatHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new VoiceChatHandler());
```

## 参见

- [完整类目录](../catalog)