<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SoundPlayer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundPlayer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SoundPlayer : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/SoundPlayer.cs`

## 概述

`SoundPlayer` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### UpdatePlaying
`public void UpdatePlaying()`

**用途 / Purpose:** 更新 `playing` 的状态或数据。

### PlaySound
`public void PlaySound()`

**用途 / Purpose:** 处理 `play sound` 相关逻辑。

### ResumeSound
`public void ResumeSound()`

**用途 / Purpose:** 处理 `resume sound` 相关逻辑。

### PauseSound
`public void PauseSound()`

**用途 / Purpose:** 处理 `pause sound` 相关逻辑。

### StopSound
`public void StopSound()`

**用途 / Purpose:** 处理 `stop sound` 相关逻辑。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

## 使用示例

```csharp
var value = new SoundPlayer();
value.UpdatePlaying();
```

## 参见

- [完整类目录](../catalog)