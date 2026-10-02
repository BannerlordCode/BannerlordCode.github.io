---
<!-- generated-by: tools/_v146_stubs.mjs -->
title: "mission 模块目录"
description: "mission：canonical 桶，含 5 个 public 类型。**有意的入口类 carve-out 桶**：`Mission`、`MissionState`、`MissionBehavior`、`Agent`、`Formation` 五个 mod 高频入口，完整任务 API 在 [`../mission-ext/`](../mission-ext/)。这是预期布局，不是重复路由 bug。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# mission 模块目录

**Bucket:** `mission`
**Types:** 5
**Routing rule:** `entryPointDirs.Agent`

## 模块导览

**有意的入口类 carve-out 桶**：`Mission`、`MissionState`、`MissionBehavior`、`Agent`、`Formation` 五个 mod 高频入口，完整任务 API 在 [`../mission-ext/`](../mission-ext/)。这是预期布局，不是重复路由 bug。

> 本桶页面路由自带尾斜杠：同桶类型写 `./<Type>`，跨桶写 `../../<bucket>/<Type>`，父级索引写 `../`。

- - [↑ API 参考](..//) · - [↑ 版本首页](../..//) | - [完整任务 API](../mission-ext/)

> 另有 4 个类型由深写 worker 负责、页面尚未落地，因此这里只列名字不列链接：Agent、Formation、Mission、MissionBehavior。

## 完整类目录

### M

- [MissionState](./MissionState) — `TaleWorlds.MountAndBlade` · 类 · 公开成员 16

## 参见

- - [↑ API 参考](..//)
- - [↑ 版本首页](../..//)
-  [完整任务 API](../mission-ext/)
