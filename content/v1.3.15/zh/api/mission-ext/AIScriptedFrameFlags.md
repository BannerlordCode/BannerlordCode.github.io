---
title: "AIScriptedFrameFlags"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AIScriptedFrameFlags`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AIScriptedFrameFlags

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public enum AIScriptedFrameFlags`
**领域:** mission-ext

## 概述

`AIScriptedFrameFlags` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `None` |
| `0` |
| `GoToPosition` |
| `1` |
| `NoAttack` |
| `2` |
| `ConsiderRotation` |
| `4` |
| `NeverSlowDown` |
| `8` |
| `DoNotRun` |
| `16` |
| `GoWithoutMount` |
| `32` |
| `RangerCanMoveForClearTarget` |
| `128` |
| `InConversation` |
| `256` |
| `Crouch` |
| `512` |
| `Drag` |

## 使用示例

```csharp
AIScriptedFrameFlags example = AIScriptedFrameFlags.None;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
