---
title: Town 跨版本对比 / Cross-Version Comparison
sidebar: auto
---

# Town

本页比较 `Town` 在 **1.3.0 / 1.3.15 / 1.4.5** 三个版本的可访问 API 变化（public/protected/internal，不含 private），数据由 [`tools/class-version-diff.mjs`](https://github.com/BannerlordCode/BannerlordCode.github.io/tree/main/tools/class-version-diff.mjs) 从源码自动提取。

This page compares the accessible API of `Town` across **1.3.0 / 1.3.15 / 1.4.5** (public/protected/internal, excluding private), extracted from source by `tools/class-version-diff.mjs`.

::: tip 重新生成 / Regenerate
源码更新后，在仓库根目录运行：`node BannerlordCode.github.io/tools/gen-version-pages.mjs`
After source updates, run from repo root: `node BannerlordCode.github.io/tools/gen-version-pages.mjs`
:::

## 对 modder 的影响 / Impact for modders

**中文：** 三个版本完全一致（公共成员数不变）。城镇经济/设施数据类跨版本稳定，基于它的 mod 兼容性好。

**English:** Identical across all three versions (public member count unchanged). The town economy/facility data class is stable across versions; mods built on it port cleanly.

---


> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。

## 源文件与声明 / Source files & declaration

| 版本 Version | 文件 File | 行数 Lines |
|------|------|------|
| 1.3.0 | `bannerlord-1.3.0/TaleWorlds.CampaignSystem/Settlements/Town.cs` | 1107 |
| 1.3.15 | `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Settlements/Town.cs` | 1101 |
| 1.4.5 | `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Town.cs` | 766 |

**类声明 / Class declaration:**
- **1.3.0:** `public class Town : Fief`
- **1.3.15:** `public class Town : Fief`
- **1.4.5:** `public class Town : Fief`

## 成员数量 / Member counts

| 版本 Version | 成员数 Members (excl. private) |
|------|------|
| 1.3.0 | 80 |
| 1.3.15 | 80 |
| 1.4.5 | 80 |

## 1.3.0 → 1.3.15 变化 / Changes

**新增 Added (0):** 无 none

**移除 Removed (0):** 无 none

## 1.3.15 → 1.4.5 变化 / Changes

**新增 Added (0):** 无 none

**移除 Removed (0):** 无 none
