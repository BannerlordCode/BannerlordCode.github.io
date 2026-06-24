
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBCommon / 通用工具`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBCommon / 通用工具

## 心智模型

先把 `MBCommon` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MBCommon.cs`
**Purpose**: 游戏引擎通用工具类 / Game engine common utilities

## 概述 / Overview

`MBCommon` 提供游戏引擎级别的通用功能，包括暂停状态管理和时间控制。

`MBCommon` provides game engine-level common functionality including pause state management and time control.

## 属性 / Properties

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| IsPaused \| bool \| 游戏是否暂停 / Whether game is paused \|

## 方法 / Methods

\| Method \| Signature \| Description \|
\|--------\|-----------\|-------------\|
\| Pause \| `static void Pause()` \| 暂停游戏 / Pause game \|
\| Resume \| `static void Resume()` \| 恢复游戏 / Resume game \|

## 代码示例 / Code Example

```csharp
bool wasPaused = MBCommon.IsPaused;
MBCommon.Pause();
// Do something
MBCommon.Resume();
```

## 使用示例

```csharp
var example = new MBCommon();
```
