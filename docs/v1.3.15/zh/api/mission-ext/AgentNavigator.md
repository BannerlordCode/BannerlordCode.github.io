# AgentNavigator

## 类概述

| 项目 | 说明 |
|------|------|
| **命名空间** | TaleWorlds.MountAndBlade (原生引擎) |
| **文件路径** | 原生引擎类，无 C# 源代码 |

## 说明

`AgentNavigator` 是原生引擎类，用于管理 Agent 的导航和寻路行为。该类在 Bannerlord 的原生 C++ 引擎中实现，未在解密的 C# 源代码中暴露。

如需使用 Agent 导航功能，建议通过以下方式：
- 使用 `Agent` 类的现有移动方法
- 通过 `MissionBehavior` 拦截导航相关事件
- 参考 `HumanAIComponent` 了解 AI 导航的实现

## 相关类

- `Agent` - 代理/单位基类
- `HumanAIComponent` - 人类 AI 组件
- `MissionBehavior` - 任务行为基类
