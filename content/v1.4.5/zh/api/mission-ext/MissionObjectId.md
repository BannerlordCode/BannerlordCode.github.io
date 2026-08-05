---
title: "MissionObjectId"
description: "Mission 场景对象与运行时对象的值类型身份；运行时来源位参与查找、相等性与网络移除。"
---
# MissionObjectId

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public struct MissionObjectId`  
**基类：** 无  
**源码文件：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObjectId.cs`

## 一句话职责

这个值类型在 Mission 生命周期内同时用数字 ID 和“是否来自运行时对象池”两个字段标识场景或运行时对象，供对象集合查找、网络消息定位、相等性比较和移除回收共同使用。

## 心智模型

把 `MissionObjectId` 当作 Mission 作用域内的身份二元组，而不是全局唯一整数。`MissionObject.OnPreInit` 会在加载完成前创建场景 ID，在加载完成后创建运行时 ID；它保存数字和 `CreatedAtRuntime` 标志，再把对象注册到 `Mission`。`Mission.OnMissionObjectRemoved` 也使用同一个值来移除对象；对于运行时对象，还会归还 ID 并广播移除消息。

第二个字段属于身份本身。场景对象的 `Id == 12` 与运行时对象的 `Id == 12` 不相同，运算符和 `Equals` 都会比较两个字段。`Invalid` 是 `(-1, false)` 哨兵值。这个值只应在当前 Mission 或网络消息生命周期内使用；不要把它当存档键，也不要在对象移除后假定它仍有效。

## 依赖关系

[`MissionObject`](../MissionObject) 持有这个值，并在 `OnPreInit` 期间从 [`Mission`](../../mission/Mission) 获取它。 [`UsableMissionObject`](../UsableMissionObject) 与 [`SynchedMissionObject`](../SynchedMissionObject) 把它当作交互和同步消息的本地身份；运行时 ID 的归还由所有者 Mission 处理，而不是由这个结构体处理。

## 成员语义

- `Id` 是数字部分，由 Mission 的分配路径设置。应从 [`MissionObject.Id`](../MissionObject) 读取，不应由 mod 重写。
- `CreatedAtRuntime` 表示 ID 是否来自运行时对象池；`MissionObject.CreatedAtRuntime` 会镜像这个标志。
- `Invalid` 等于 `new MissionObjectId(-1)`。它用于清空可选对象身份或表达“没有 Mission 对象”，不是实际查找目标。
- `==`、`!=` 和 `Equals(object)` 会同时比较 `Id` 与 `CreatedAtRuntime`。
- `GetHashCode()` 会先在运行时身份上合入 `0x40000000` 位再计算哈希，因此 `Dictionary<MissionObjectId, MissionObject>` 与相等性保持同样的身份区分。
- `ToString()` 产生 `id - createdAtRuntime` 形式的可读文本，例如 `12 - True`。

## 真实获取示例

从当前 Mission 所拥有的对象读取身份。对象列表才是注册事实；用数字构造一个值不会注册任何对象。

```csharp
using TaleWorlds.MountAndBlade;

public static MissionObjectId FindFirstRuntimeObjectId()
{
    Mission mission = Mission.Current;
    if (mission != null)
    {
        foreach (MissionObject missionObject in mission.MissionObjects)
        {
            MissionObjectId id = missionObject.Id;
            if (id != MissionObjectId.Invalid && id.CreatedAtRuntime)
            {
                return id;
            }
        }
    }

    return MissionObjectId.Invalid;
}
```

在同一个 Mission 内建立本地索引时，应使用完整值作为 key：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public static Dictionary<MissionObjectId, MissionObject> IndexMissionObjects(Mission mission)
{
    Dictionary<MissionObjectId, MissionObject> result = new();
    foreach (MissionObject missionObject in mission.MissionObjects)
    {
        result[missionObject.Id] = missionObject;
    }

    return result;
}
```

## 风险与边界

- 只比较 `Id` 会把恰好同号的场景对象与运行时对象合并。必须直接比较结构体，或同时比较两个字段。
- 运行时 ID 来自有上限的对象池，移除后可能归还并再次分配。它不会跨 Mission 稳定，也不适合作为持久存档数据。
- `MissionObject.Id` 是注册身份。修改它会破坏 `Mission.MissionObjects` 查找、网络消息和运行时 ID 归还处理。
- `MissionObjectId.Invalid` 不代表旧对象引用可以继续使用；仍要单独清空对象引用，并在需要时检查 `GameEntity.IsValid`。
- 从已移除对象复制出来的值只能作为历史记录。不要在之后把它发送出去，假定原对象仍存在。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 所有者：[MissionObject](../MissionObject) · [Mission](../../mission/Mission)
- ↔ 运行时交互：[UsableMissionObject](../UsableMissionObject) · [SynchedMissionObject](../SynchedMissionObject)
- 移除与网络上下文：[MissionBehavior](../../mission/MissionBehavior)
- English/中文：[MissionObjectId](../../../../en/api/mission-ext/MissionObjectId)
