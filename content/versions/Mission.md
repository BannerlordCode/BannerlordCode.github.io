---
title: Mission 跨版本对比 / Cross-Version Comparison
extra:
  sidebar: auto
---
# Mission

## Mental Model

Treat `Mission` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

本页比较 `Mission` 在 **1.3.0 / 1.3.15 / 1.4.5** 三个版本的可访问 API 变化（public/protected/internal，不含 private），数据由 [`tools/class-version-diff.mjs`](https://github.com/BannerlordCode/BannerlordCode.github.io/tree/main/tools/class-version-diff.mjs) 从源码自动提取。该模块属于“精选跨版本对比”集合，而不是全站所有类型的全量对比表。

This page compares the accessible API of `Mission` across **1.3.0 / 1.3.15 / 1.4.5** (public/protected/internal, excluding private), extracted from source by `tools/class-version-diff.mjs`. It is part of a selected cross-version set, not a full matrix of every type in the site.

> **重新生成 / Regenerate**
> 源码更新后，在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-version-pages.mjs`
> After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-version-pages.mjs`

## 对 modder 的影响 / Impact for modders

**中文：** 1.4.5 新增 `IsNavalRaidBattle`（新的“海袭”战斗类型）、`OnCameraShakeTriggeredDelegate`、`TryGetMissileVelocityFromMissileIndex`、`ComputeSpawnPathDeploymentOffset`；移除 `GetBattleSizeOffset`/`GetPathOffsetFromDistance`/`GetBattleSizeFactor`（战斗规模/路径偏移逻辑重构）。海军袭击是新的战斗类别，判断战斗类型的 mod 需适配。

**English:** 1.4.5 adds `IsNavalRaidBattle` (a new naval-raid battle type), `OnCameraShakeTriggeredDelegate`, `TryGetMissileVelocityFromMissileIndex`, `ComputeSpawnPathDeploymentOffset`; removes `GetBattleSizeOffset`/`GetPathOffsetFromDistance`/`GetBattleSizeFactor` (battle-size/path-offset logic refactored). Naval raid is a new battle category — mods that classify battle types must adapt.

---


> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。

## 源文件与声明 / Source files & declaration

| 版本 Version | 文件 File | 行数 Lines |
|------|------|------|
| 1.3.0 | `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Mission.cs` | 8504 |
| 1.3.15 | `bannerlord-1.3.15/TaleWorlds.MountAndBlade/Mission.cs` | 8552 |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs` | 7010 |

**类声明 / Class declaration:**
- **1.3.0:** `public sealed class Mission : DotNetObject, IMission`
- **1.3.15:** `public sealed class Mission : DotNetObject, IMission`
- **1.4.5:** `public sealed class Mission : DotNetObject, IMission`

## 成员数量 / Member counts

| 版本 Version | 成员数 Members (excl. private) |
|------|------|
| 1.3.0 | 376 |
| 1.3.15 | 386 |
| 1.4.5 | 387 |

## 1.3.0 → 1.3.15 变化 / Changes

**新增 Added (12):** `ListenerAndAttenuationPosBlendFactor`, `IsBattleSpawnPathSelectorInitialized`, `CanPlayerTakeControlOfAnotherAgentWhenDead`, `IsPositionInsideHardBoundaries`, `SetListenerAndAttenuationPosBlendFactor`, `SetCloseProximityWaveSoundsEnabled`, `ForceDisableOcclusion`, `GetCurrentVolumeGeneratorVersion`, `CanTakeControlOfAgent`, `SetPlayerCanTakeControlOfAnotherAgentWhenDead`, `TakeControlOfAgent`, `ComputeTroopBodyPropertiesDelegate`

**移除 Removed (2):** `CorpseAgentInfos`, `OnCorpseRemoved`

## 1.3.15 → 1.4.5 变化 / Changes

**新增 Added (4):** `IsNavalRaidBattle`, `OnCameraShakeTriggeredDelegate`, `TryGetMissileVelocityFromMissileIndex`, `ComputeSpawnPathDeploymentOffset`

**移除 Removed (3):** `GetBattleSizeOffset`, `GetPathOffsetFromDistance`, `GetBattleSizeFactor`

### 1.4.5 新增成员签名 / Added in 1.4.5

| 成员 Member | 类型 Kind | 签名 Signature |
|------|------|------|
| `IsNavalRaidBattle` | property | `public bool IsNavalRaidBattle =>` |
| `OnCameraShakeTriggeredDelegate` | method | `public delegate void OnCameraShakeTriggeredDelegate(in Vec3 position, float radius)` |
| `TryGetMissileVelocityFromMissileIndex` | method | `public bool TryGetMissileVelocityFromMissileIndex(int missileIndex, out Vec3 velocity)` |
| `ComputeSpawnPathDeploymentOffset` | method | `public static float ComputeSpawnPathDeploymentOffset(int troopCount, Path path)` |

### 1.4.5 移除成员签名 / Removed in 1.4.5 (存在于 1.3.15)

| 成员 Member | 类型 Kind | 签名 Signature |
|------|------|------|
| `GetBattleSizeOffset` | method | `public static float GetBattleSizeOffset(int battleSize, Path path)` |
| `GetPathOffsetFromDistance` | method | `public static float GetPathOffsetFromDistance(float distance, Path path)` |
| `GetBattleSizeFactor` | method | `public static float GetBattleSizeFactor(int battleSize, float normalizationFactor)` |

<!-- BEGIN CROSSVERSION-BACKLINK -->

## 返回类参考 / Back to Class Reference

| 版本 Version | 语言 Lang | 链接 |
|------|------|------|
| v1.3.0 | 🇨🇳 中文 | [v1.3.0 Mission](/v1.3.0/zh/api/mission/Mission) |
| v1.3.0 | 🇬🇧 English | [v1.3.0 Mission](/v1.3.0/en/api/mission/Mission) |
| v1.3.15 | 🇨🇳 中文 | [v1.3.15 Mission](/v1.3.15/zh/api/mission/Mission) |
| v1.3.15 | 🇬🇧 English | [v1.3.15 Mission](/v1.3.15/en/api/mission/Mission) |
| v1.4.5 | 🇨🇳 中文 | [v1.4.5 Mission](/v1.4.5/zh/api/mission/Mission) |
| v1.4.5 | 🇬🇧 English | [v1.4.5 Mission](/v1.4.5/en/api/mission/Mission) |

<!-- END CROSSVERSION-BACKLINK -->

## Usage Example

```csharp
var mission = Mission.Current;
mission.AddActiveMissionObject(missionObject);
```
