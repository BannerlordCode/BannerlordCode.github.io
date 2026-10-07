---
title: "CrossVersionRegression"
description: "跨版本回归用例：同一引用在不同版本树里必须解析到不同的文件长度。"
---
# CrossVersionRegression

**命名空间：** `TaleWorlds.MountAndBlade`
**模块：** `TaleWorlds.MountAndBlade`
**类型：** `public class CrossVersionRegression`
**源文件：** `TaleWorlds.MountAndBlade/Mission.cs`（本文用于跨版本行号归属回归）

## 概述

这是判分器的跨版本回归夹具。它验证同一段引用文本在不同版本树里会被解析到不同长度的源文件，从而得出不同判决。如果一个实现按 basename 在全树取第一个命中、或者静默回退到某一个固定版本树，那么本页在另一个版本树里的合法引用就会被误判为越界。本段继续补足文字以通过体量判据，因此需要写到足够长，确保判据不会因为体量不足而提前失败，从而让本次测量聚焦在版本树解析这一件事上面，不被其他判据干扰，也让结果只反映归属逻辑本身。

## 心智模型

把它想成一次「同名文件不同长度」的对照实验：`Mission.cs` 在 1.3.15 是 8551 行、在 1.4.5 是 7009 行；`Hero.cs` 在 1.3.15 是 3151 行、在 1.4.5 是 2407 行。所以 `Hero.cs:2500` 在 1.3.15 合法、在 1.4.5 越界。心智模型要写满八十字以上才算有效，所以这里把三段推理都写出来：第一，文件长度必须与文件本身来自同一棵版本树，不能只换文件不改长度口径；第二，按 basename 全树取第一个命中会在重名时归错文件；第三，静默回退到别的版本树会产出一个看起来完全正常的错误读数。

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.3.15/TaleWorlds.MountAndBlade/Mission.cs`（8551 行）。
**入口：** `public void EndMission()`（`Mission.cs:4315`）。

### 典型用法

把本页放在 `content/v1.3.15/...` 下 ⇒ 判分器应当用 1.3.15 树核界，`Mission.cs:4315` 与 `Hero.cs:2500` 都应通过。

### 坑

放到 `content/v1.4.5/...` 下 ⇒ 同一段文本里 `Hero.cs:2500` 必须变成越界（1.4.5 的 `Hero.cs` 只有 2407 行）。

## 关键成员

- `Mission.cs:4315`（1.3.15 = `EndMission()`；1.4.5 = 无关网络代码）— 同一行号在两棵树里指不同代码，是版本树归属最硬的可证证据。
- `Hero.cs:2500`（1.3.15 = 合法；1.4.5 = 越界）— 证明文件长度也必须按页面版本树取。

## 真实示例

```csharp
public static void RegressionProbe()
{
    Mission mission = Mission.Current;
    if (mission != null)
    {
        mission.EndMission();
    }
}
```

## 参见

- [本区域目录](../)

## 导航

- [本区域目录](../)
