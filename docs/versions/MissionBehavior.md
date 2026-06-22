---
title: MissionBehavior 跨版本对比 / Cross-Version Comparison
sidebar: auto
---

# MissionBehavior

本页比较 `MissionBehavior` 在 **1.3.0 / 1.3.15 / 1.4.5** 三个版本的可访问 API 变化（public/protected/internal，不含 private），数据由 [`tools/class-version-diff.mjs`](https://github.com/BannerlordCode/BannerlordCode.github.io/tree/main/tools/class-version-diff.mjs) 从源码自动提取。

This page compares the accessible API of `MissionBehavior` across **1.3.0 / 1.3.15 / 1.4.5** (public/protected/internal, excluding private), extracted from source by `tools/class-version-diff.mjs`.

::: tip 重新生成 / Regenerate
源码更新后，在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-version-pages.mjs`
After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-version-pages.mjs`
:::

## 对 modder 的影响 / Impact for modders

**中文：** 稳定。1.3.15 相比 1.3.0 新增 1 个成员；1.4.5 与 1.3.15 一致。任务行为基类跨版本兼容性好。

**English:** Stable. 1.3.15 adds one member over 1.3.0; 1.4.5 matches 1.3.15. The mission-behavior base class ports well across versions.

---


> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。

## 源文件与声明 / Source files & declaration

| 版本 Version | 文件 File | 行数 Lines |
|------|------|------|
| 1.3.0 | `bannerlord-1.3.0/TaleWorlds.MountAndBlade/MissionBehavior.cs` | 321 |
| 1.3.15 | `bannerlord-1.3.15/TaleWorlds.MountAndBlade/MissionBehavior.cs` | 326 |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs` | 252 |

**类声明 / Class declaration:**
- **1.3.0:** `public abstract class MissionBehavior : IMissionBehavior`
- **1.3.15:** `public abstract class MissionBehavior : IMissionBehavior`
- **1.4.5:** `public abstract class MissionBehavior : IMissionBehavior`

## 成员数量 / Member counts

| 版本 Version | 成员数 Members (excl. private) |
|------|------|
| 1.3.0 | 60 |
| 1.3.15 | 61 |
| 1.4.5 | 61 |

## 1.3.0 → 1.3.15 变化 / Changes

**新增 Added (1):** `OnTutorialCompleted`

**移除 Removed (0):** 无 none

## 1.3.15 → 1.4.5 变化 / Changes

**新增 Added (0):** 无 none

**移除 Removed (0):** 无 none
