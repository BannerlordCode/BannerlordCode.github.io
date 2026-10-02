# 周期证据 — 2026-08-19 wave V（save-system 存档往返簇）

> 驱动：`/ulw-loop` · 自动化 `automation-1785652108735`（大局观）。承接 wave U，继续在稳定命名空间 `save-system` 手写「存档如何真正往返」簇。

## 1. 本周期选定簇（5 页）

| 页面 | 角色 | 真实源文件 |
| --- | --- | --- |
| `DefinitionContext` | 启动时反射收集全部类型/字段定义并发现错误 | `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/DefinitionContext.cs` |
| `LoadContext` | 读档上下文，按 `LocalSaveId` 还原对象图 | `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/LoadContext.cs` |
| `GameData` | 序列化过程的对象图数据容器（二进制 blob） | `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/GameData.cs` |
| `ArchiveSerializer` | 写档二进制格式编码器 | `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/ArchiveSerializer.cs` |
| `ArchiveDeserializer` | 读档二进制格式解码器 | `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/ArchiveDeserializer.cs` |

## 2. Before / After（save-system 命名空间，108 页）

| 指标 | wave U 后 | wave V 后 |
| --- | --- | --- |
| `deep_pass` | 6 | **11** |
| `stub` | 100 | **95** |
| `other`（noise） | 2 | 2 |
| `TOTAL` | 108 | 108 |

> 净进度：5 个 stub 页 → deep_pass。累计接管手写以来，`save-system` 已转 11 个深页（5 wave U + 5 wave V + 既有 `SaveManager`）。

## 3. 逐页 `classifyPage` 复核

| 页面 | status | 心智>80 | 依赖/参见链接 | 真实 C# 示例 | 概述达标 |
| --- | --- | --- | --- | --- | --- |
| `DefinitionContext` | deep_pass | ✓ | 13 | ✓ | ✓ |
| `LoadContext` | deep_pass | ✓ | 11 | ✓ | ✓ |
| `GameData` | deep_pass | ✓ | 10 | ✓ | ✓ |
| `ArchiveSerializer` | deep_pass | ✓ | 15 | ✓ | ✓ |
| `ArchiveDeserializer` | deep_pass | ✓ | 17 | ✓ | ✓ |

禁止样板句 `STUB_PATTERNS` grep：**0 命中**（exit=1）。

## 4. 断链审计（v1.3.15 zh/api 全量）

```
FILES=5632
TOTAL_LINKS=20777   (wave U 后 20604 → +173 新链接)
BROKEN_LINKS=0
FILES_WITH_BROKEN=0
```

## 5. 无副作用确认（mtime）

`ls -l` 检查：`DefinitionContext` / `LoadContext` / `GameData` / `ArchiveSerializer` / `ArchiveDeserializer` 五页时间戳均为 `2026-08-19`，其余 103 页不变 → 零连带改动。

## 6. 场景测试 #3 强化

> 场景 #3：「如何在不损坏旧存档的前提下，为自己的 mod 添加自定义存档字段？」

本波补齐了「存档往返全链路」文档：`Saveable*Attribute`（标注）→ `SaveableTypeDefiner`（注册）→ `DefinitionContext`（反射收集）→ `SaveContext`（写）/ `LoadContext`（读）→ `GameData` + `ArchiveSerializer`/`ArchiveDeserializer`（二进制格式）。modder 现在可从文档独立理解从标注到落盘再还原的完整契约，包含 `GetData`/`CreateFrom` 与 `Write`/`Read` 段顺序不一致、folder 顺序漂移、长度错等真实坏档陷阱。

## 7. 下一入口（wave W 候选）

save-system 剩余 95 stub 中可优先：
- 核心对象图：`ObjectSaveData` / `ObjectLoadData` / `ContainerDefinition` / `ContainerSaveData` / `ContainerLoadData` / `TypeDefinition` / `MemberDefinition` / `MemberTypeId` / `MetaData` / `SaveOutput` / `LoadResult`
- 驱动层：`ISaveDriver` / `FileDriver` / `AsyncFileSaveDriver` / `InMemDriver`
- BasicTypeSerializer 家族（多而机械，价值较低，可批量后置）

仍挂起：4 项战略决策（#1 严格门禁入 CI / #3 覆盖口径 / #4 campaign 去重）待用户裁决。
