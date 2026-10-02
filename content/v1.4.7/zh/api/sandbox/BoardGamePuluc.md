---
title: "BoardGamePuluc"
description: "SandBox.BoardGames.BoardGamePuluc —— 命名空间 SandBox.BoardGames 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# BoardGamePuluc

**Namespace:** `SandBox.BoardGames`  
**Module:** `SandBox`  
**Type:** `public class BoardGamePuluc : BoardGameBase`  
**Base:** `BoardGameBase`  
**Source:** `SandBox/BoardGames/BoardGamePuluc.cs`

## 概述

`BoardGamePuluc` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.BoardGames` 下的类，声明于模块目录 `SandBox` 的 `SandBox/BoardGames/BoardGamePuluc.cs`（第 17 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `BoardGameBase`；解析到的成员共 117 项，其中 11 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public PawnInformation(int x, bool inSpawn, bool topPawn, PawnPuluc.MovementState state, List<PawnPuluc> pawnsBelow, bool captured, Vec3 position, PawnPuluc capturedBy)` — 方法，8 个参数，返回 P
- `public readonly int X;` — 字段，类型 int
- `public readonly bool IsInSpawn;` — 字段，类型 bool
- `public readonly bool IsTopPawn;` — 字段，类型 bool
- `public readonly bool IsCaptured;` — 字段，类型 bool
- `public readonly PawnPuluc.MovementState State;` — 字段，类型 PawnPuluc.MovementState
- `public readonly List<PawnPuluc> PawnsBelow;` — 字段，类型 List<PawnPuluc>
- `public readonly Vec3 Position;` — 字段，类型 Vec3
- `public readonly PawnPuluc CapturedBy;` — 字段，类型 PawnPuluc
- `public BoardInformation(ref BoardGamePuluc.PawnInformation[] pawns)` — 方法，1 个参数，返回 B
- `public readonly BoardGamePuluc.PawnInformation[] PawnInformation;` — 字段，类型 BoardGamePuluc.PawnInformation[]


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 11 条成员记录全部来自 `SandBox/BoardGames/BoardGamePuluc.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class BoardGamePuluc : BoardGameBase` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [PawnPuluc（成员类型）](../PawnPuluc)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
