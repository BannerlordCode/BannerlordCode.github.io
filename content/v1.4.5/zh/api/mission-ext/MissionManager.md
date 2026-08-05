---
title: "MissionManager"
description: "MissionManager 是标记静态任务工厂的发现属性，供 Bannerlord 建立 mission registry。"
---
# MissionManager

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionManager : Attribute`  
**Base:** `Attribute`  
**Source file:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionManager.cs`

## 一句话定位

它标记一个类型，使其中带 `[MissionMethod]` 的公开静态方法被发现为任务打开入口。模块随后把这些方法登记到 MissionInfo，供任务选择、编辑器和运行时工厂查找，而它本身不持有活动 Mission。

## 心智模型

虽然名称叫 `MissionManager`，它不是运行时 manager，不持有 `Mission.Current`，也没有属性和方法。模块启动时，`Module.FindMissions()` 会在通过程序集检查的已加载程序集里查找带该属性的类型，再读取类型中的公开静态 `[MissionMethod]` 方法，记录 manager 类型和方法，供任务选择器或编辑器使用。真正创建 Mission 的仍是工厂方法，通常由它调用 `MissionState.OpenNew`。

## 何时使用，何时不要使用

- 需要发布可发现的任务工厂时，把它标在静态任务工厂类型上。
- 真正的创建逻辑必须放在带 `[MissionMethod]` 的公开静态方法中；只有类型标记不会发布入口。
- 不要把它当 singleton，也不要寻找 `MissionManager.Current`。
- 不要把它和持有活动游戏状态包装的 [MissionState](../../campaign-ext/MissionState) 混淆。

## 依赖与边界

```
[MissionManager] 类型
  -> Module.FindMissions()
  -> 公开静态 [MissionMethod] 方法
  -> MissionInfo registry 条目
  -> 任务工厂 / MissionState.OpenNew
```

- 发现者：[Module](../../core/Module) 扫描已加载程序集并建立任务元数据。
- 工厂边界：[MissionState](../../campaign-ext/MissionState) 创建并压入活动任务状态。
- 行为组合：工厂回调提供 [MissionBehavior](../../mission/MissionBehavior) 实例。
- 现有实现：[SandBoxMissions](../../campaign-ext/SandBoxMissions) 使用了该属性。

## 真实示例

下面遵循源码 `SandBoxMissions` 的结构：属性标在静态容器上，方法再单独标记为可发现入口。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

[MissionManager]
public static class MyMissionFactories
{
    [MissionMethod]
    public static Mission OpenTelemetryMission(MissionInitializerRecord record)
    {
        return MissionState.OpenNew(
            "TelemetryMission",
            record,
            mission => new MissionBehavior[]
            {
                new MissionTelemetryLogic()
            });
    }
}

public sealed class MissionTelemetryLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (Mission.Current != null)
        {
            // 在这里读取或记录任务范围内的状态。
        }
    }
}

Mission mission = Mission.Current;
Campaign campaign = Campaign.Current;
```

只有同时满足属性和公开静态方法形状时，`Module.FindMissions()` 才会登记该入口。`MissionInitializerRecord` 和行为列表仍由工厂负责。

## 风险与生命周期边界

- 该属性不会验证场景、initializer record 或行为顺序。
- 如果程序集没有通过模块的程序集检查，即使类型有属性也不会被发现。
- 没有 `[MissionMethod]` 的公开静态方法不会成为任务入口。
- 工厂漏掉必要行为时，任务可能加载成功但缺少战役、Agent、网络或 UI 逻辑。
- 该属性是元数据，不是存档数据，也不能替代 [Mission](../../mission/Mission)。

## 版本说明

本页遵循 v1.4.5 的 `MissionManager` 和 `Module.FindMissions()`。切换版本时请重新检查发现过滤器和 `[MissionMethod]` 元数据。

## 导航

- 父级：[Mission 扩展 API](../)
- 同级：[MissionState](../../campaign-ext/MissionState) · [MissionLogic](../MissionLogic)
- 相关：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [SandBoxMissions](../../campaign-ext/SandBoxMissions)
