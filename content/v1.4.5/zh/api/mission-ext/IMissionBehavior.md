---
title: "IMissionBehavior"
description: "IMissionBehavior 是由 MissionBehavior 实现的空任务行为标记接口，让 Mission 能统一保存和处理行为对象。"
---
# IMissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public interface IMissionBehavior`  
**Base:** 无  
**Source file:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMissionBehavior.cs`

## 一句话定位

它只标记对象属于 mission behavior 家族；接口本身没有成员，真正的生命周期契约由 [MissionBehavior](../../mission/MissionBehavior) 提供。

## 心智模型

`IMissionBehavior` 是类型边界，不是服务 API，也不是接收任务回调的第二条入口。具体基类 `MissionBehavior` 实现它，并提供 `Mission`、`BehaviorType`、创建、tick、Agent、渲染和结束回调。`Mission` 以 `MissionBehavior` 形式保存行为，并按 logic、other、network 分组处理。因此 mod 通常应继承 `MissionLogic`、`MissionView` 或其他 `MissionBehavior` 子类；只实现这个空接口不会让对象自动参与 Mission。

## 何时使用，何时不要使用

- 需要表达“任意任务行为”而不要求生命周期成员时，可以使用该接口类型。
- 需要回调时应继承 [MissionLogic](../MissionLogic) 或 [MissionBehavior](../../mission/MissionBehavior)。
- 不要只实现该接口后期待 `OnMissionTick` 或 `OnEndMission` 被调用；接口没有声明这些成员。
- 不要把它和 [MissionView](../MissionView) 混淆，后者由 `MissionScreen` 驱动视图回调。

## 依赖与边界

```text
MissionState.OpenNew
  -> MissionBehavior 集合
  -> MissionBehavior 实现 IMissionBehavior
  -> Mission 分发生命周期回调
```

- 运行时持有者：[Mission](../../mission/Mission) 保存附加的行为实例。
- 生命周期实现：[MissionBehavior](../../mission/MissionBehavior) 提供实际回调面。
- 逻辑特化：[MissionLogic](../MissionLogic) 是任务规则的常用基类。
- 视图特化：[MissionView](../MissionView) 把任务状态接到屏幕层。

## 真实示例

下面使用真实的 mission behavior 注入边界。对象是 `MissionLogic`，所以它通过 `MissionBehavior` 获得回调，同时满足 `IMissionBehavior`：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class MissionTelemetryLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (Mission.Current != null && Mission.Current.CurrentTime > 10f)
        {
            // 在这里记录当前任务数据；任务结束后不要继续持有 Mission。
        }
    }
}

Mission mission = Mission.Current;
if (mission != null)
{
    mission.AddMissionBehavior(new MissionTelemetryLogic());
    IMissionBehavior behavior = mission.GetMissionBehavior<MissionTelemetryLogic>();
}
```

接口变量适合做通用归属检查；真正提供回调和当前 `Mission` 访问能力的是有类型的 `MissionBehavior` 子类。

## 风险与生命周期边界

- 空接口不会验证对象是否能挂到 Mission；应使用具体的 `MissionBehavior` 子类。
- 行为属于当前 Mission。`OnEndMission` 后，行为引用不能再用于引擎操作。
- 回调顺序由 `Mission` 控制；手动调用生命周期方法可能重复工作或绕过行为分组。
- 持久战役数据不应放在这个标记接口中，应由战役行为和存档契约负责。

## 版本说明

本页遵循 v1.4.5 声明：`IMissionBehavior` 没有成员，主要实现是 `MissionBehavior`。切换版本时请重新检查基类和行为存储方式。

## 导航

- 父级：[Mission 扩展 API](../)
- 同级：[MissionLogic](../MissionLogic) · [MissionView](../MissionView)
- 相关：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionState](../../campaign-ext/MissionState)
