
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class AgentController
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentController.cs`

## 概述

`AgentController` 是挂在 `Agent` 上的每 agent 控制器（移动、AI 等）的基类。每个控制器有 `Owner` agent 和 `Mission`。mod 定义自定义控制器类型（经 `AgentControllerType`）并加到 agent 上以运行每 tick 逻辑，经 `OnInitialize` 初始化。

## 心智模型

先把 `AgentController` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 主要属性

\| Name \| Signature \|
\|------\|-----------\|
\| `Owner` \| `public Agent Owner { get; set; }` \|
\| `Mission` \| `public Mission Mission { get; set; }` \|

## 主要方法

### OnInitialize
```csharp
public virtual void OnInitialize()
```

## 使用示例

```csharp
// 给新生成的 agent 加一个自定义控制器
public class MyAgentController : AgentController
{
    public override void OnTick(float dt)
    {
        // 本 agent 的每 tick 逻辑
        base.OnTick(dt);
    }
}

// agent 生成时：
var ctrl = agent.AddComponent<MyAgentController>();
ctrl.OnInitialize();
```

## 参见

- [完整类目录](../catalog)