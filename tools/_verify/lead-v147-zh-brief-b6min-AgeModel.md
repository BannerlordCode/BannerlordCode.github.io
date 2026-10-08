# brief — b6min / AgeModel（最小形态实验：规则越多 ⇒ 准备越多）
写这一个文件：`content/v1.4.7/zh/api/campaign-ext/AgeModel.md`

源码：`bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`（40 行）
行号：直接用 `tools/_verify/b6/AgeModel.sig.txt`（9 个锚点行，已测量过，不要再核实）。

## 现在就写。不要读源码以外的任何东西（不要读判分器/门禁脚本、不要读兄弟页、不要搜使用方）。

骨架（照抄，只填内容）：
```
---
title: "AgeModel"
description: "<一句话>"
---
# AgeModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** <照源码第 8 行的声明行>
**基类：** <照源码>
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`（声明见第 N 行）

## 概述
## 心智模型
## 怎么用
## 关键成员
## 真实示例
## 参见
- [DefaultAgeModel](../DefaultAgeModel)
- [Campaign](../Campaign)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
```
要求：正文 >2500 字节；`关键成员` 表每行带 `AgeModel.cs:N`；`真实示例` 含一次真实 `.Method(` 调用；链接只在 `参见`/`导航`。

写完运行并回报这一行：
`node tools/_verify/j13-hard-gate.mjs content/v1.4.7/zh/api/campaign-ext/AgeModel.md`
