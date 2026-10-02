# 证据包 — cycle 2026-08-20 (wave Y2: BasicTypeSerializer 家族)

## 本周期目标
重写 `save-system` 命名空间下 BasicTypeSerializer 家族（IBasicTypeSerializer 簇中心 + 20 个内置实现）共 21 页 stub → 手写深页。

## 基线（本周期开工前，re-verify）
- `node tools/_tmp_classify_save.mjs` → `TOTAL=108 deep_pass=38 stub=68 other=2`
- 链接基线（cycle-Y 尾）：`BROKEN_LINKS=0`

## 交付（21 页，全部手写，源 1.3.15 + 1.4.5 交叉核对）
- 簇中心：`IBasicTypeSerializer.md`（契约 + 20 实现总表，每实现含人工用途句 + 链接）
- 数值/标量实现（11）：Bool, Byte, Sbyte, Short, Ushort, Int, Uint, Long, Ulong, Float, Double
- 值结构实现（9）：Color, Mat2, Mat3, MatrixFrame, Quaternion, Vec2, Vec2i, Vec3, Vec3i

## 终态复验（独立，不采信代理自报）
- `node tools/_tmp_classify_save.mjs` → `TOTAL=108 deep_pass=59 stub=47 other=2`
  - 21 页全部转 `deep_pass`；`grep -E "IBasicTypeSerializer|BasicTypeSerializer" | grep stub` → **0**
- `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs`
  → `TOTAL_LINKS=21680 BROKEN_LINKS=0 FILES_WITH_BROKEN=0`
- 禁用样板句 grep（`阅读时先通过属性了解状态` / `是 TaleWorlds…下的公开类型` / `自动生成类参考` / `null; // 替换` / `SomeValue` / `service =`）：**0 命中**
- 标题正则校验：`**类型/Type：**` 与 `## 依赖图（` 后缀 → **0 命中**（全部 `**类型：**` + `## 依赖图`）

## 本周期踩坑与修正（已修，零连带）
1. **示例门禁（no-real-example）**：首批 10 个数值页示例把 `SaveManager` 令牌写在 `//` 注释里，且去掉注释后仅 2 行代码（<阈值 3）。`hasRealCsharpExample` 先剥离注释再判定，注释内令牌不计、行数不足 → 判 stub。修正：在 ```csharp 块内补 3 行真实代码（含 `SaveManager.Save(...)`），10 页复核全过。
2. **兄弟链接深度（./ vs ../）**：本周期 brief 误写「同目录兄弟用 `./Name`」。Zola clean-URL 下叶页位于自身子目录，兄弟页需用 `../Name`。初版引入 154 断链（21 文件）。修正：对 21 叶页批量 `](./`→`](../`；`_index.md` 与 `SaveManager.md` 的 `./` 属正确用法未动。复验 `BROKEN_LINKS=0`。
   - **教训**：叶页兄弟链接一律 `../Name`；`../../` 用于跨到 `api/` 级；`../../../` 用于跨到 `zh/` 级（如 architecture/save-system）；`_index.md` / 叶页指回本区索引才用 `./`。

## 源码准确性抽检（抽查易错项，已核实）
- `Vec3BasicTypeSerializer`：`WriteVec3`/`ReadVec3`，`GetSizeInBytes`=16（4 floats）✓
- `Vec2iBasicTypeSerializer`：**写入用 `WriteFloat`×2、读取用 `ReadInt`×2**（两端各 4 字节，非对称）——代理如实记录 ✓
- 注册入口：`SaveableBasicTypeDefiner.DefineBasicTypes()` 经 `SaveableTypeDefiner.AddBasicTypeDefinition(typeof(X), saveId, new XxxBasicTypeSerializer())` 登记（saveId 1–20 + string 21）✓

## 场景测试 E 可答性（#3 自定义存档字段不坏档）
- 链路已贯通：`SaveableFieldAttribute` / `SaveablePropertyAttribute`（标注）→ `SaveableTypeDefiner`（登记）→ `SaveContext`（写档遍历）→ `IBasicTypeSerializer`（标量/值结构自动路由）。模组加自定义值结构时，实现 `IBasicTypeSerializer` 并在 `DefineBasicTypes` 注册、保证 `GetSizeInBytes` 与 `Write/Read` 字节布局一致，即可安全扩展存档而坏档。
- 相关深页：`SaveableTypeDefiner`、`SaveableBasicTypeDefiner`、`IBasicTypeSerializer`、`SaveContext`、`SaveManager` 均已是 deep_pass 且互链。

## 已知限制
- 未跑完整 `zola build`（站约 3.6万页，自动化周期超时风险）；以 `audit-links` + `classify` 作为等效门禁（二者镜像构建期链接解析）。
- `other=2`（Jun-26「内容」文件）非本周期范围，严格门仍不过。
- save-system 剩 47 stub：定义/ID/扩展类（`*Definition` / `SaveId` / `ContainerType` / `IObjectResolver` 等），下个 wave 继续。

## 下一入口（wave Y3）
save-system 剩 47 stub → 定义层（`BasicTypeDefinition`/`TypeDefinition`/`StructDefinition`/`EnumDefinition`/`InterfaceDefinition`/`MemberDefinition`/`FieldDefinition`/`PropertyDefinition`/`ContainerDefinition`/`CustomField`/`TypeDefinitionBase`）+ ID/扩展层（`SaveId`/`ContainerSaveId`/`GenericSaveId`/`TypeSaveId`/`EntryId`/`FolderId`/`ContainerType`/`SavedMemberType`）+ 接口/resolver（`IArchiveContext`/`IObjectResolver`/`IConflictResolver`/`IEnumResolver`/`ISavedStruct`）+ 序列化器（`ArchiveConcurrentSerializer`/`StringSerializer`/`ZipExtensions` 等）；之后推进 core/engine/gui/items/mission/viewmodel/localization。4 项战略决策仍挂起待裁决。
