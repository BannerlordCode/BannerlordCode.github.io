---
title: Agent 跨版本对比 / Cross-Version Comparison
sidebar: auto
---

# Agent

本页比较 `Agent` 在 **1.3.0 / 1.3.15 / 1.4.5** 三个版本的可访问 API 变化（public/protected/internal，不含 private），数据由 [`tools/class-version-diff.mjs`](https://github.com/BannerlordCode/BannerlordCode.github.io/tree/main/tools/class-version-diff.mjs) 从源码自动提取。

This page compares the accessible API of `Agent` across **1.3.0 / 1.3.15 / 1.4.5** (public/protected/internal, excluding private), extracted from source by `tools/class-version-diff.mjs`.

::: tip 重新生成 / Regenerate
源码更新后，在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-version-pages.mjs`
After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-version-pages.mjs`
:::

## 对 modder 的影响 / Impact for modders

**中文：** 1.4.5 新增多个战斗/队形相关成员：`CanPerformBraceCached`、`GetBaseFormationFrame`、`GetBoneEntitialFrame`、`UpdateDirectionChangeTendency`、`TrySetFormationFrame`、`OnConversationStarted` 等；移除 `GetRandomPairOfRealBloodBurstBoneIndices`。涉及 agent 战斗/队形/骨骼的 mod 获得 新钩子，部分旧血骨索引 API 被移除。

**English:** 1.4.5 adds several combat/formation members: `CanPerformBraceCached`, `GetBaseFormationFrame`, `GetBoneEntitialFrame`, `UpdateDirectionChangeTendency`, `TrySetFormationFrame`, `OnConversationStarted`, etc.; removes `GetRandomPairOfRealBloodBurstBoneIndices`. Combat/formation/skeleton mods gain new agent hooks; the old blood-burst bone-index API is gone.

---


> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。

## 源文件与声明 / Source files & declaration

| 版本 Version | 文件 File | 行数 Lines |
|------|------|------|
| 1.3.0 | `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Agent.cs` | 6933 |
| 1.3.15 | `bannerlord-1.3.15/TaleWorlds.MountAndBlade/Agent.cs` | 6986 |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs` | 5599 |

**类声明 / Class declaration:**
- **1.3.0:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
- **1.3.15:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
- **1.4.5:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`

## 成员数量 / Member counts

| 版本 Version | 成员数 Members (excl. private) |
|------|------|
| 1.3.0 | 502 |
| 1.3.15 | 508 |
| 1.4.5 | 514 |

## 1.3.0 → 1.3.15 变化 / Changes

**新增 Added (9):** `HasAnyRangedWeaponCached`, `IsFormationFrameEnabled`, `SetScriptedTargetEntity`, `GetGroundMaterialForCollisionEffect`, `GetTotalMass`, `GetBoneEntitialFrameAtAnimationProgress`, `TryAttachToFormation`, `TryRemoveAllDetachmentScores`, `SetIsPhysicsForceClosed`

**移除 Removed (3):** `SetScriptedTargetEntityAndPosition`, `UndetachAndAttachToFormation`, `UndetachAndStopUsingObjects`

## 1.3.15 → 1.4.5 变化 / Changes

**新增 Added (7):** `CanPerformBraceCached`, `GetBaseFormationFrame`, `OnConversationStarted`, `GetBoneEntitialFrame`, `UpdateDirectionChangeTendency`, `TrySetFormationFrame`, `CanPerformBrace`

**移除 Removed (1):** `GetRandomPairOfRealBloodBurstBoneIndices`

### 1.4.5 新增成员签名 / Added in 1.4.5

| 成员 Member | 类型 Kind | 签名 Signature |
|------|------|------|
| `CanPerformBraceCached` | property | `public bool CanPerformBraceCached =>` |
| `GetBaseFormationFrame` | method | `public bool GetBaseFormationFrame(out WorldPosition formationPosition, out Vec2 formationDirection)` |
| `OnConversationStarted` | method | `public void OnConversationStarted()` |
| `GetBoneEntitialFrame` | method | `public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex, bool useBoneMapping)` |
| `UpdateDirectionChangeTendency` | method | `public void UpdateDirectionChangeTendency()` |
| `TrySetFormationFrame` | method | `public bool TrySetFormationFrame(in WorldPosition formationPosition, in Vec2 formationDirection)` |
| `CanPerformBrace` | method | `public bool CanPerformBrace()` |

### 1.4.5 移除成员签名 / Removed in 1.4.5 (存在于 1.3.15)

| 成员 Member | 类型 Kind | 签名 Signature |
|------|------|------|
| `GetRandomPairOfRealBloodBurstBoneIndices` | method | `public ValueTuple<sbyte, sbyte> GetRandomPairOfRealBloodBurstBoneIndices()` |
