# MBCommon / 通用工具

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MBCommon.cs`
**Purpose**: 游戏引擎通用工具类 / Game engine common utilities

## 概述 / Overview

`MBCommon` 提供游戏引擎级别的通用功能，包括暂停状态管理和时间控制。

`MBCommon` provides game engine-level common functionality including pause state management and time control.

## 属性 / Properties

| Property | Type | Description |
|----------|------|-------------|
| IsPaused | bool | 游戏是否暂停 / Whether game is paused |

## 方法 / Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Pause | `static void Pause()` | 暂停游戏 / Pause game |
| Resume | `static void Resume()` | 恢复游戏 / Resume game |

## 代码示例 / Code Example

```csharp
bool wasPaused = MBCommon.IsPaused;
MBCommon.Pause();
// Do something
MBCommon.Resume();
```
